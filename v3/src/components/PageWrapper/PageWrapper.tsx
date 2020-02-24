import React, { Component } from 'react';

import style from './PageWrapper.module.scss';

interface IProperty {}

interface IState {}

export default class PageWrapper extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div className={style['container']}>
        {this.props.children}
      </div>
    );
  }
}
