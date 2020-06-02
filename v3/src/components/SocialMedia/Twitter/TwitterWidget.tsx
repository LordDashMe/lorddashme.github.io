import { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    twttr: any;
  }
}

export default class TwitterWidget extends Component {

  public componentDidMount(): void {
    if (!isSSR()) {
      this.initializeVendor();
    }
  }

  private initializeVendor(): void {
    if (!window.twttr) {
      const script: any = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/resources/vendor/twitter/twitter-widget.min.js';
      document.body.appendChild(script);
      console.log('SocialMedia_Twitter_TwitterWidget_Component: has been initialized.');
    } 
  }

  public render(): null { return null; }
}
