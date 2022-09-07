import React, { Component } from 'react';

declare global {

  interface Window {
    adsbygoogle: any;
  }
}

interface GoogleAdsenseResponsiveAdProps {
  adClient: string;
  adSlot: string;
}

export default class GoogleAdsenseResponsiveAd extends Component<GoogleAdsenseResponsiveAdProps> {

  public componentDidMount(): void {
    
    if (typeof window !== 'undefined') {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }

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
