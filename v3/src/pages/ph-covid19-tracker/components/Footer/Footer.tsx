import React, { Component } from 'react';

import { isSSR } from '../../../../common/helper';

interface IProperty {}

interface IState {}

declare const ga: Function;

export default class Footer extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
  }

  public componentDidMount() {
    if (! isSSR()) {
      this.loadGoogleAnalyticsPageView(); 
    }
  }

  private loadGoogleAnalyticsPageView(): void {
    ga('create', 'UA-128894279-1', 'auto');
    ga('send', 'pageview', window.location.pathname);
  }


  public render(): JSX.Element {
    return (<div id="ph-covid19-tracker-footer-component"></div>);
  }
}
