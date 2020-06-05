import React, { Component } from 'react';

import style from './PageTitle.module.scss';

interface IProperty {
  content: string;
}

interface IState {}

export default class PageTitle extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <h1 id="page-title-component" className={style['container']}>{this.props.content}</h1>
    );
  }
}
