import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    ga: any;
  }
}

interface IProperty {}

interface IState {}

export default class GoogleAnalytics extends Component<IProperty, IState> {

  public componentDidMount(): void {
    if (! isSSR()) {
      this.initializeVendor();
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

  public render(): JSX.Element {
    return (
      <div id="analytics-google-analytics-component">
        {this.props.children}
      </div>
    );
  }
}
