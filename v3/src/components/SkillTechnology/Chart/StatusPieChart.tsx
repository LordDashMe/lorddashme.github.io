import React, { Component } from 'react';
import loadable from '@loadable/component';

const ReactChartJS2 = loadable(() => import('react-chartjs-2'), { fallback: null });

import style from './StatusPieChart.module.scss';

interface IProperty {}

interface IState {
  statusPieChart: IStatusPieChart;
};

interface IStatusPieChart {
  data: object;
  options: object;
}

export default class StatusPieChart extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      statusPieChart: {
        data: {
          labels: [
            'WEB DEVELOPMENT', 
            'MOBILE APP DEVELOPMENT', 
            'DESKTOP APP DEVELOPMENT', 
            'DEVOPS', 
            'COMPUTER NETWORKING'
          ],
          datasets: [
            {
              label: '2018',
              data: [
                10, 
                3, 
                3, 
                7, 
                5
              ],
              backgroundColor: [
                '#000',
                '#ccc',
                '#ccc',
                '#404040',
                '#777',
              ]
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            labels: {
              boxWidth: 16,
              fontSize: 14,
              fontColor: '#000',
              fontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'
            }
          },
          tooltips: {
            bodyFontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'
          }
        }
      }
    };
  }

  public render(): JSX.Element {
    return (
      <div id="skill-technology-chart-status-pie-chart-component" className={style['container']}>
        <ReactChartJS2 data={this.state.statusPieChart.data} options={this.state.statusPieChart.options} type={'pie'} width={300} height={300} />
      </div>
    );
  }
}
