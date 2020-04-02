import React, { Component } from 'react';

import style from './About.module.scss';

interface IProperty {}

interface IState {}

export default class About extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-about-component" className={style['container']}>
        <div className={style['content']}>
          <p>
            COVID-19 is an infectious disease caused by a virus (SARS-CoV-2).&nbsp;
            The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing.&nbsp;
            How it spreads? coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze.&nbsp;
            It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.&nbsp;
            You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.&nbsp;
            <br/>
            <small>*Reference: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" rel="noopener noreferrer" target="_blank">World Health Organization</a> and <a href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019" rel="noopener noreferrer" target="_blank">Wikipedia</a>.</small></p>
        </div>
      </div>
    );
  } 
}
