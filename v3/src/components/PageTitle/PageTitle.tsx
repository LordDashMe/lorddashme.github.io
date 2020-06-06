import React, { Component } from 'react';

import style from './PageTitle.module.scss';

interface IProperty {
  content: string;
  color?: string;
}

interface IState {}

export default class PageTitle extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <h1 
        id="page-title-component" 
        className={style['container']}
        style={{ color: (typeof this.props.color !== 'undefined' ? this.props.color : 'unset') }}>
        {this.props.content}
      </h1>
    );
  }
}
