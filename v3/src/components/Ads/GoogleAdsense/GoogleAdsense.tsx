import { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export default class GoogleAdsense extends Component {

  public componentDidMount(): void {
    if (!isSSR()) {
      this.initializeVendor();
    }
  }

  private initializeVendor(): void {
    if (!window.adsbygoogle) {
      const script: any = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      document.body.appendChild(script);
      console.log('[LDM] Ads_GoogleAdsense_GoogleAdsenseComponent: has been initialized.'); 
    }
  }

  public render(): null { return null; }
}
