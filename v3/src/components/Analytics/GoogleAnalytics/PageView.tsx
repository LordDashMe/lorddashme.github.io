import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare const ga: Function;

interface IProperty {
  trackingId: string;
}

interface IState {}

export default class PageView extends Component<IProperty, IState> {

  private static readonly WAITING_TIME: number = 1000;

  public componentDidMount(): void {
    if (! isSSR()) {
      this.initializeCall();
    }
  }

  private initializeCall(): void {

    if (typeof ga !== 'undefined' && ga) {
      console.log('PageView_Component: GA detected!');
      ga('create', this.props.trackingId, 'auto');
      ga('send', 'pageview', window.location.pathname);
    } else {
      console.info(`PageView_Component: Waiting for GA to load properly. ${PageView.WAITING_TIME}ms`);
      setTimeout(this.initializeCall.bind(this), PageView.WAITING_TIME);
    } 
  }

  public render(): JSX.Element {
    return (<div id="analytics-google-analytics-page-view-component"></div>);
  }
}
