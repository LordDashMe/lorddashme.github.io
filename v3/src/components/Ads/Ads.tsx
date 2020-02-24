import React, { Component } from 'react';

import style from './Ads.module.scss';

interface IAdsProperty {
  appearance: string;
}

interface IAdsState {}

export default class Ads extends Component<IAdsProperty, IAdsState> {

  public render(): JSX.Element {
    
    let adsClassName = style['container'];
    
    if (this.props.appearance === 'horizontal') {
      adsClassName += ' ' + style['style-horizontal'];
    }

    return (
      <div className={adsClassName}>
        {this.props.children}
      </div>
    );
  }
}
