import React, { Component } from 'react';

import style from './Ads.module.scss';

interface IProperty {
  appearance?: string;
}

interface IState {}

export default class Ads extends Component<IProperty, IState> {

  private getAppearanceClassName(): string {

    let className: string = style['container'];
    
    if (typeof this.props.appearance !== 'undefined') {
      if (this.props.appearance === 'horizontal') {
        className += ' ' + style['style-horizontal'];
      } else if (this.props.appearance === 'vertical') {
        className += ' ' + style['style-vertical'];
      } 
    }

    return className;
  }

  public render(): JSX.Element {
    return (
      <div id="ads-component" className={this.getAppearanceClassName()}>
        <small className={style['advertisement']}>ADVERTISEMENT</small>
        {this.props.children}
      </div>
    );
  }
}
