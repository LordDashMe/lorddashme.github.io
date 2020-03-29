import React, { Component } from 'react';

import style from './Page.module.scss';

interface IProperty {}

interface IState {}

export default class Page extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div id="page-component" className={style['container']}>
        {this.props.children}
      </div>
    );
  }
}
