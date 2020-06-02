import { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    YT: any;
  }
}

export default class Youtube extends Component {

  public componentDidMount(): void {
    if (!isSSR()) {
      this.initializeVendor();
    }
  }

  private initializeVendor(): void {
    if (!window.YT) {
      const script: any = document.createElement('script');
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
      console.log('[LDM] VideoPlayer_Youtube_YoutubeComponent: has been initialized.');
    } 
  }

  public render(): null { return null; }
}
