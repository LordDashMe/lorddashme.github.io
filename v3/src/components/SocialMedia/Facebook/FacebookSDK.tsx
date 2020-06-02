import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    _fb_sdk: any;
  }
}

export default class FacebookSDK extends Component {

  public componentDidMount(): void {
    if (!isSSR()) {
      this.initializeVendor();
    }
  }

  private initializeVendor(): void {
    if (!window._fb_sdk) {
      const script: any = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/resources/vendor/facebook/facebook-sdk.min.js';
      document.body.appendChild(script);
      window._fb_sdk = true;
      console.log('SocialMedia_Facebook_FacebookSDKComponent: has been initialized.');
    } 
  }

  public render(): JSX.Element {
    return (<div id="fb-root"></div>);
  }
}
