import React, { Component } from 'react';
import { Pie }  from 'react-chartjs-2';

import './StatusChart.scss';

export default class StatusChart extends Component {

  public render(): JSX.Element {
    const data = {
      labels: ['WEB DEVELOPMENT', 'MOBILE APP DEVELOPMENT', 'DESKTOP APP DEVELOPMENT', 'DEVOPS', 'COMPUTER NETWORKING'],
      datasets: [
        {
          label: '2018',
          data: [9, 4, 3, 8, 6],
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
          fontColor: '#000',
          fontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'
        }
      },
      tooltips: {
        bodyFontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'
      }
    };
    return (
      <div className="StatusChart">
        <Pie data={data} options={options} width={350} height={350} />
      </div>
    );
  }
}
