import React, { Component } from 'react';

import './Ads.scss';

interface IAdsProperty {
  appearance: string;
}

interface IAdsState {}

export default class Ads extends Component<IAdsProperty, IAdsState> {

  public render(): JSX.Element {
    let adsClassName = 'Ads';
    if (this.props.appearance === 'horizontal') {
      adsClassName += ' ads-style-horizontal';
    }
    return (
      <div className={adsClassName}>
        {this.props.children}
      </div>
    );
  }
}
