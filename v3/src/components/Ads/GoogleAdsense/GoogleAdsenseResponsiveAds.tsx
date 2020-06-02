import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

interface IProperty {
  adClient: string;
  adSlot: string;
}

interface IState {}

export default class GoogleAdsenseResponsiveAds extends Component<IProperty, IState> {

  public componentDidMount(): void {
    if (!isSSR()) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }

  public render(): JSX.Element {
    return (
      <ins 
        id="ads-google-adsense-responsive-ads-component"
        className="adsbygoogle"
        style={{'display': 'block'}}
        data-ad-client={this.props.adClient}
        data-ad-slot={this.props.adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    );
  }
}
