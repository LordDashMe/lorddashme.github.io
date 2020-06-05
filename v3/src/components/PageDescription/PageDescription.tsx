import React, { Component } from 'react';

import style from './PageDescription.module.scss';

interface IProperty {
  content: string;
}

interface IState {}

export default class PageDescription extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <p id="page-description-component" className={style['container']}>{this.props.content}</p>
    );
  }
}
