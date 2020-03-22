import React, { Component } from 'react';
import loadable from '@loadable/component';

import { isSSR, loadableFallbackTemplate } from '../../../../common/helper';

const Ads = loadable(() => import('../../../../components/Ads/Ads'), { fallback: loadableFallbackTemplate(`#ads-component`) });
const GoogleAdsense = loadable(() => import('../../../../components/Ads/GoogleAdsense'), { fallback: loadableFallbackTemplate(`#ads-google-adsense-component`) });

import style from './Footer.module.scss';

interface IProperty {}

interface IState {}

declare const ga: Function;

export default class Footer extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
  }

  public componentDidMount() {
    if (! isSSR()) {
      this.loadGoogleAnalyticsPageView(); 
    }
  }

  private loadGoogleAnalyticsPageView(): void {
    ga('create', 'UA-128894279-1', 'auto');
    ga('send', 'pageview', window.location.pathname);
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-footer-component">
        <div className={style['container']}>
          <div className={style['wrapper']}>
            <small>Sources:&nbsp;
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/" target="_blank" rel="noopener noreferrer">WHO</a>,&nbsp;
              <a href="http://www.covid19.gov.ph/" target="_blank" rel="noopener noreferrer">COVID19 GOVPH</a>,&nbsp;
              <a href="https://ncovtracker.doh.gov.ph/" target="_blank" rel="noopener noreferrer">NCov Tracker DOH GovPH</a>,&nbsp;
              <a href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noopener noreferrer">Worldmeter</a>,&nbsp;
              <a href="https://www.coronatracker.com/" target="_blank" rel="noopener noreferrer">CoronaTracker</a>, and various International Media.&nbsp;
              Powered by&nbsp;
              <a href="https://firebase.google.com/products/firestore/" target="_blank" rel="noopener noreferrer">Google Firebase: Cloud Firestore</a>,&nbsp;
              <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>,&nbsp;
              <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">Gatsby</a>,&nbsp;
              <a href="https://www.chartjs.org/" rel="noopener noreferrer" target="_blank">Chart.js</a>, and&nbsp;
              <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages.</a>
            </small>
            {/* Line Item: LordDashMe_Horizontal_Home */}
            <Ads appearance="horizontal">
              <GoogleAdsense adClient="ca-pub-3427694918014398"
                            adSlot="4220072227"/>
            </Ads>
            <small>This page is a personal project and inspired by the people who are need for information about the latest updates related to the COVID-19. The only aim of this project is to share a simplified information related to the confirmed cases of COVID-19 in the Philippines. This is a 100% open source project and available in the Github. If you find any information above is inaccurate, please send a message by using the following <a href="/contact/"  rel="noopener noreferrer" target="_blank">form</a>.</small>
          </div>
        </div>
      </div>
    );
  }
}
