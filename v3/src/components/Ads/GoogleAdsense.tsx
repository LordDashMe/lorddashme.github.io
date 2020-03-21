import React, { Component } from 'react';

import style from './GoogleAdsense.module.scss';

interface IProperty {
  adClient: string;
  adSlot: string;
}

interface IState {}

declare global {
  
  interface Window {
    adsbygoogle: any;
  }
}

export default class GoogleAdsense extends Component<IProperty, IState> {

  public componentDidMount(): void {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  public render(): JSX.Element {
    
    const googleAdsStyle = {
      'display': 'block'
    };

    return (
      <div id="ads-google-adsense-component" className={style['container']}>
        <ins className="adsbygoogle"
             style={googleAdsStyle}
             data-ad-client={this.props.adClient}
             data-ad-slot={this.props.adSlot}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    );
  }
}
