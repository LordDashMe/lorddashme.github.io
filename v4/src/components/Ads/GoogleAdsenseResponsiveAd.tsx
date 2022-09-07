import React, { Component } from 'react';

interface GoogleAdsenseResponsiveAdProps {
  adClient: string;
  adSlot: string;
}

export default class GoogleAdsenseResponsiveAd extends Component<GoogleAdsenseResponsiveAdProps> {

  public render(): JSX.Element {

    return (
      <ins
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
