import React, { Component } from 'react';
import loadable from '@loadable/component';

import { isSSR } from '../../../../common/helper';

import Firestore from '../../../../components/Database/Firebase/Firestore';

const ReactChartJS2 = loadable(() => import('react-chartjs-2'), { fallback: null });

import style from './StatusPieChart.module.scss';

interface IProperty {}

interface IState {
  statusPieChart: IStatusPieChart;
  totalConfirmedCases: number;
  percentageVisibility: boolean;
  percentageValue: number;
};

interface IStatusPieChart {
  data: object;
  options: object;
}

interface IStatusOverview {
  id: string;
  sys_id: string;
  label: string;
  count: number;
  color: string;
}

export default class StatusPieChart extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      statusPieChart: {
        data: this.getStatusPieChartData(),
        options: this.getStatusPieChartOptions()
      },
      totalConfirmedCases: 0,
      percentageVisibility: false,
      percentageValue: 0,
    };
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.fetchProjectsOnFireStore(); 
    }
  }

  private getStatusPieChartData(): object {
    return {
      labels: [
        'INFECTED',
        'RECOVERED',
        'DEATHS'
      ],
      datasets: [
        {
          label: 'COVID-19',
          data: [
            0,
            10,
            0
          ],
          backgroundColor: [
            '#e29e01',
            '#60a138',
            '#a13838'
          ],
          borderColor: '#fff',
          borderWidth: 0,
          hoverBorderColor: [
            '#fff',
            '#fff',
            '#fff'
          ],
          hoverBorderWidth: 0,
          mouseout: () => {
            alert();
          }
        }
      ]
    };
  }

  private getStatusPieChartOptions(): object {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          boxWidth: 16,
          fontSize: 14,
          fontColor: '#000',
          fontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'
        }
      },
      tooltips: {
        bodyFontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
        custom: (tooltip: any): void => {
          if (tooltip.opacity <= 0) {
            this.unsetPercentageValue();
          }
        }
      },
      onClick: (chartEvent: any, chartState: any): void => {
        if (!chartState || typeof chartState[0] === 'undefined' || !chartState[0]) {
          return;
        }
        if (typeof chartState[0]._index !== 'undefined') {
          this.setPercentageValue(chartState[0]._index);
        }
      },
      onHover: (chartEvent: any, chartState: any): void => {
        if (!chartState || typeof chartState[0] === 'undefined' || !chartState[0]) {
          return;
        }
        if (typeof chartState[0]._index !== 'undefined') {
          this.setPercentageValue(chartState[0]._index);
        }
      }
    };
  }

  private unsetPercentageValue(): void {

    const currentState = {...this.state};

    currentState.percentageVisibility = false;
    currentState.percentageValue = 0;

    this.setState(currentState);
  }

  private setPercentageValue(specificIndex: number): void {

    const currentState = {...this.state};
    const specificCaseCount = currentState.statusPieChart.data['datasets'][0].data[specificIndex];

    currentState.percentageVisibility = true;
    currentState.percentageValue = parseFloat(((specificCaseCount / currentState.totalConfirmedCases) * 100).toFixed(2));

    this.setState(currentState);
  }

  private fetchProjectsOnFireStore(): void {
    
    Firestore.clearInstance();
    Firestore.initialize();
    Firestore.getInstance()
      .collection('ph-covid19-tracker-status-overview')
      .orderBy('order', 'desc')
      .get()
      .then((querySnapshot: any): void => { 

        const totalConfirmedCases = querySnapshot.docs[0].data().count;
        
        const statusOverview = (querySnapshot.docs)
          .filter((doc: any): IStatusOverview | boolean => {
            const document = doc.data();
            if (document.sys_id === 'confirmed_cases') {
              return false;
            } 
            return doc;
          }).map((doc: any): IStatusOverview => {
          const document = doc.data();
            return {
              id: doc.id,
              sys_id: document.sys_id,
              label: document.label,
              count: document.count,
              color: document.color
            };
          });

        const currentState = {...this.state};

        currentState.statusPieChart.data['labels'] = statusOverview.map((details: IStatusOverview): string => {
          return details.label;
        });

        currentState.statusPieChart.data['datasets'][0]['data'] = statusOverview.map((details: IStatusOverview): number => {
          return details.count; 
        });

        currentState.statusPieChart.data['datasets'][0]['backgroundColor'] = statusOverview.map((details: IStatusOverview): string => {
          return details.color;
        });

        currentState.totalConfirmedCases = totalConfirmedCases;
        
        this.setState(currentState);
      });
  }

  private getPercentage(): JSX.Element {
    
    if (this.state.percentageVisibility) {
      return (
        <div className={style['percentage-wrapper']}>
          <div className={style['percentage']}><span id="percentage-value">{this.state.percentageValue}</span>%</div>
        </div>
      );
    }

    return (<div></div>);
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-chart-status-pie-chart-component" className={style['container']}>
        {this.getPercentage()}
        <ReactChartJS2 data={this.state.statusPieChart.data} options={this.state.statusPieChart.options} type={'pie'} width={300} height={300} />
      </div>
    );
  }
}
