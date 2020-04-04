import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    _fb_sdk: any;
  }
}

interface IProperty {}

interface IState {}

export default class FacebookSDK extends Component<IProperty, IState> {

  public componentDidMount(): void {
    if (! isSSR()) {
      this.initializeVendor();
    }
  }

  private initializeVendor(): void {
    if (! window._fb_sdk) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/resources/vendor/facebook/facebook-sdk.min.js';
      document.body.appendChild(script);
      console.log('SocialMedia_Facebook_FacebookSDK_Component: has been initialized.');
      window._fb_sdk = true;
    } 
  }

  public render(): JSX.Element {
    return (
      <div id="social-media-facebook-facebook-sdk-component">
        <div id="fb-root"></div>
        {this.props.children}
      </div>
    );
  }
}
