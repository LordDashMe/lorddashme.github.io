import React, { Component } from 'react';

import ReactChartJS2 from 'react-chartjs-2';

import { themeConstant } from '../../../common/helper';

import style from './StatusPieChart.module.scss';

interface IProperty {
  theme?: string;
}

interface IState {
  statusPieChart: IStatusPieChart;
};

interface IStatusPieChart {
  data: object;
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
                9, 
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
        }
      }
    };
  }

  public render(): JSX.Element {
    return (
      <div id="skill-technology-chart-status-pie-chart-component" className={style['container']}>
        <ReactChartJS2 data={this.state.statusPieChart.data} options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              boxWidth: 16,
              fontSize: 14,
              fontColor: (this.props.theme === themeConstant.DARK ? '#fff' : '#000'),
              fontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'
            }
          },
          tooltips: {
            bodyFontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'
          }
        }} type={'pie'} width={300} height={300} />
      </div>
    );
  }
}
