import React, { Component } from 'react';

import './Ads.scss';

declare global {
  
  interface Window {
    adsbygoogle: any;
  }
}

export default class Ads extends Component {

  public componentDidMount(): void {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  public render(): JSX.Element {
    const adsStyle = {
      'display': 'block'
    };
    return (
      <div className="Ads">
        {/* LordDashMe_Horizontal_Home */}
        <ins className="adsbygoogle"
             style={adsStyle}
             data-ad-client="ca-pub-3427694918014398"
             data-ad-slot="4220072227"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
          
        </script>
      </div>
    );
  }
}
