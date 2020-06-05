import React, { Component } from 'react';

import style from './ServicesWrapper.module.scss';

interface IProperty {}

interface IState {}

export default class ServicesWrapper extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div id="status-services-wrapper-component" className={style['container']}>
        {this.props.children}
      </div>
    );
  } 
}
