import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    twttr: any;
  }
}

interface IProperty {}

interface IState {}

export default class TwitterWidget extends Component<IProperty, IState> {

  public componentDidMount(): void {
    if (! isSSR()) {
      this.initializeVendor();
    }
  }

  private initializeVendor(): void {
    if (! window.twttr) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/resources/vendor/twitter/twitter-widget.min.js';
      document.body.appendChild(script);
      console.log('SocialMedia_Twitter_TwitterWidget_Component: has been initialized.');
    } 
  }

  public render(): null {
    return null;
  }
}
