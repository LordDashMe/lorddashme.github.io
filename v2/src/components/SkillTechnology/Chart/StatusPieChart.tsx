import React, { Component } from 'react';
import { Pie }  from 'react-chartjs-2';

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
            'WEB', 
            'MOBILE APP', 
            'DESKTOP APP', 
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
                '#777',
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
              fontSize: 12.9,
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
      <div className={style['container']}>
        <Pie data={this.state.statusPieChart.data} options={this.state.statusPieChart.options} width={300} height={300} />
      </div>
    );
  }
}
