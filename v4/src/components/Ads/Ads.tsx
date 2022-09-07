import React, { Component } from 'react';

import './Ads.scss';

interface AdsProps {
  children?: any;
}

export default class Ads extends Component<AdsProps> {

  public render(): JSX.Element {
    
    return (
      <div className="ads">
        <div className="ads-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}
