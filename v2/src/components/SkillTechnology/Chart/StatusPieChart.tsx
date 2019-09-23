import React, { Component } from 'react';
import { Pie }  from 'react-chartjs-2';

import style from './StatusPieChart.module.scss';

export default class StatusPieChart extends Component {

  public render(): JSX.Element {
    
    const data = {
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
            4, 
            3, 
            8, 
            6
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
    };

    const options = {
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
    };

    return (
      <div className={style['container']}>
        <Pie data={data} options={options} width={300} height={300} />
      </div>
    );
  }
}
