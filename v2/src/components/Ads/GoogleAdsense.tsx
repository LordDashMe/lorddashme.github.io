import React, { Component } from 'react';

import style from './GoogleAdsense.module.scss';

// Line Item: LordDashMe_Horizontal_Home
const GOOGLE_AD_CLIENT = 'ca-pub-3427694918014398';
const GOOGLE_AD_SLOT = '4220072227';

declare global {
  
  interface Window {
    adsbygoogle: any;
  }
}

export default class GoogleAdsense extends Component {

  public componentDidMount(): void {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  public render(): JSX.Element {
    
    const googleAdsStyle = {
      'display': 'block'
    };

    return (
      <div className={style['container']}>
        <ins className="adsbygoogle"
             style={googleAdsStyle}
             data-ad-client={GOOGLE_AD_CLIENT}
             data-ad-slot={GOOGLE_AD_SLOT}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    );
  }
}
