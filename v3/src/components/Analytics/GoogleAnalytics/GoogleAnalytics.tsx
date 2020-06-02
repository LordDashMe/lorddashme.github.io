import { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    ga: any;
  }
}

interface IProperty {
  trackingId: string;
}

interface IState {}

export default class GoogleAnalytics extends Component<IProperty, IState> {

  private static readonly PAUSE_TIME: number = 1000; // 1000ms 1s

  public componentDidMount(): void {
    if (!isSSR()) {
      this.initializeVendor();
      this.initializePageView();
    }
  }

  private initializeVendor(): void {
    if (!window.ga) {
      const script: any = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/resources/vendor/google-analytics/ga.min.js';
      document.body.appendChild(script);
      console.log('[LDM] Analytics_GoogleAnalytics_GoogleAnalyticsComponent: has been initialized.');
    } 
  }

  private initializePageView(): void {
    if (typeof window.ga !== 'undefined' && window.ga) {
      console.log('[LDM] Analytics_GoogleAnalytics_GoogleAnalyticsComponent: GA detected!');
      window.ga('create', this.props.trackingId, 'auto');
      window.ga('send', 'pageview', window.location.pathname);
    } else {
      console.info(`[LDM] Analytics_GoogleAnalytics_GoogleAnalyticsComponent: Waiting for GA to load properly.`);
      // We used setTimeout in order to have a pause time 
      // before calling again the initializePageView.
      setTimeout(this.initializePageView.bind(this), GoogleAnalytics.PAUSE_TIME);
    } 
  }

  public render(): null { return null; }
}
