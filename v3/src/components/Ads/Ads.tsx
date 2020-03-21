import React, { Component } from 'react';

import style from './Ads.module.scss';

interface IProperty {
  appearance: string;
}

interface IState {}

export default class Ads extends Component<IProperty, IState> {

  public render(): JSX.Element {
    
    let adsClassName = style['container'];
    
    if (this.props.appearance === 'horizontal') {
      adsClassName += ' ' + style['style-horizontal'];
    }

    return (
      <div id="ads-component" className={adsClassName}>
        {this.props.children}
      </div>
    );
  }
}
