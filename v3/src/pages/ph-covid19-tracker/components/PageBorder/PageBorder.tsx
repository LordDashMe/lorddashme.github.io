import React, { Component } from 'react';

import style from './PageBorder.module.scss';

interface IProperty {
  position: string;
}

interface IState {}

export default class PageBorder extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-page-border-component" className={style['container'] + ' ' + style[this.props.position]}></div>
    );
  } 
}
