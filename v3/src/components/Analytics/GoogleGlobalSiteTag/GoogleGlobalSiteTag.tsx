import { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    dataLayer: any;
    gtag: any;
  }
}

interface IProperty {
  trackingId: string;
}

interface IState {}

export default class GoogleGlobalSiteTag extends Component<IProperty, IState> {

  private static readonly PAUSE_TIME: number = 1000; // 1000ms 1s

  public componentDidMount(): void {
    if (!isSSR()) {
      this.initializeVendor();
      this.initializePageView();
    }
  }

  private initializeVendor(): void {
    if (!window.dataLayer) {
      const script: any = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + this.props.trackingId;
      document.body.appendChild(script);
      console.log('[LDM] Analytics_GoogleGlobalSiteTag_GoogleGlobalSiteTagComponent: has been initialized.');
    } 
  }

  private initializePageView(): void {
    if (typeof window.dataLayer !== 'undefined' && window.dataLayer) {
      console.log('[LDM] Analytics_GoogleGlobalSiteTag_GoogleGlobalSiteTagComponent: GA detected!');
      // Reference: 
      //  - https://developers.google.com/analytics/devguides/collection/gtagjs
      //  - https://developers.google.com/analytics/devguides/collection/gtagjs/pages
      //  - https://developers.google.com/analytics/devguides/collection/gtagjs/migration
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', this.props.trackingId, { 
        'send_page_view': true,
        'page_path': window.document.location.pathname
      });
    } else {
      console.info(`[LDM] Analytics_GoogleGlobalSiteTag_GoogleGlobalSiteTagComponent: Waiting for GA to load properly.`);
      // We used setTimeout in order to have a pause time 
      // before calling again the initializePageView.
      setTimeout(this.initializePageView.bind(this), GoogleGlobalSiteTag.PAUSE_TIME);
    } 
  }

  public render(): null { return null; }
}
