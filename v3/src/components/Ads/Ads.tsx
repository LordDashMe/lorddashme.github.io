import React, { Component } from 'react';

import style from './Ads.module.scss';

interface IProperty {
  appearance?: string;
}

interface IState {}

export default class Ads extends Component<IProperty, IState> {

  public render(): JSX.Element {
    
    let adsClassName: string = style['container'];
    
    if (typeof this.props.appearance !== 'undefined') {
      if (this.props.appearance === 'horizontal') {
        adsClassName += ' ' + style['style-horizontal'];
      } else if (this.props.appearance === 'vertical') {
        adsClassName += ' ' + style['style-vertical'];
      } 
    }

    return (
      <div id="ads-component" className={adsClassName}>
        <small className={style['advertisement']}>ADVERTISEMENT</small>
        {this.props.children}
      </div>
    );
  }
}
