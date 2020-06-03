import React, { Component } from 'react';

import style from './MainTitle.module.scss';

interface IProperty {}

interface IState {}

export default class MainTitle extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <h1 id="ph-covid19-tracker-main-title-component" className={style['container']}>COVID-19 CASES IN THE PHILIPPINES</h1>
    );
  }
}
