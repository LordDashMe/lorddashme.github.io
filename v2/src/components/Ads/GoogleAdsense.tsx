import React, { Component } from 'react';

import './GoogleAdsense.scss';

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
      <div className="GoogleAdsense">
        {/* LordDashMe_Horizontal_Home */}
        <ins className="adsbygoogle"
             style={googleAdsStyle}
             data-ad-client="ca-pub-3427694918014398"
             data-ad-slot="4220072227"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    );
  }
}
