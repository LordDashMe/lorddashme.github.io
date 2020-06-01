import React, { Component } from 'react';

import style from './Footer.module.scss';

interface IProperty {}

interface IState {}

export default class Footer extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-footer-component" className={style['container']}>
        <p className={style['content']}>Sources:&nbsp;
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/" target="_blank" rel="noopener noreferrer">WHO</a>,&nbsp;
          <a href="http://www.covid19.gov.ph/" target="_blank" rel="noopener noreferrer">COVID19 GOVPH</a>,&nbsp;
          <a href="https://ncovtracker.doh.gov.ph/" target="_blank" rel="noopener noreferrer">NCov Tracker DOH GovPH</a>,&nbsp;
          <a href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noopener noreferrer">Worldmeter</a>,&nbsp;
          <a href="https://www.coronatracker.com/" target="_blank" rel="noopener noreferrer">CoronaTracker</a>, and various international media.&nbsp;
          Powered by&nbsp;
          <a href="https://firebase.google.com/products/firestore/" target="_blank" rel="noopener noreferrer">Google Firebase: Cloud Firestore</a>,&nbsp;
          <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>,&nbsp;
          <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">Gatsby</a>,&nbsp;
          <a href="https://www.chartjs.org/" rel="noopener noreferrer" target="_blank">Chart.js</a>, and&nbsp;
          <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages.</a>&nbsp;
          This page is a personal project and inspired by the people who are in need of information on the latest updates about the COVID-19 cases in the Philippines.&nbsp;
          The only aim of this project is to share a simplified information from the stated official sources.&nbsp;
          This is a 100% open source project and available in the Github.&nbsp;
          If you find any inaccurate information above, please send a message by using the following <a href="/contact/"  rel="noopener noreferrer" target="_blank">form</a>.
        </p>
      </div>
    );
  }
}
