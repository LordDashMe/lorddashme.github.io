import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    ga: any;
  }
}

declare const ga: Function;

interface IProperty {
  trackingId: string;
}

interface IState {}

export default class GoogleAnalytics extends Component<IProperty, IState> {

  private static readonly WAITING_TIME: number = 1000;

  public componentDidMount(): void {
    if (! isSSR()) {
      this.initializeVendor();
      this.initializePageView();
    }
  }

  private initializeVendor(): void {
    if (! window.ga) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/resources/vendor/google-analytics/ga.min.js';
      document.body.appendChild(script);
      console.log('[LDM] Analytics_GoogleAnalytics_GoogleAnalytics_Component: has been initialized.');
    } 
  }

  private initializePageView(): void {
    
    if (typeof ga !== 'undefined' && ga) {
      console.log('[LDM] Analytics_GoogleAnalytics_GoogleAnalytics_Component: GA detected!');
      ga('create', this.props.trackingId, 'auto');
      ga('send', 'pageview', window.location.pathname);
    } else {
      console.info(`[LDM] Analytics_GoogleAnalytics_GoogleAnalytics_Component: Waiting for GA to load properly.`);
      // We used setTimeout in order to have a pause time 
      // before calling again the initializePageView.
      setTimeout(this.initializePageView.bind(this), GoogleAnalytics.WAITING_TIME);
    } 
  }

  public render(): null {
    return null;
  }
}
