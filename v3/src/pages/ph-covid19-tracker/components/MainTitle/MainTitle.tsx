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
      <div id="ph-covid19-tracker-main-title-component" className={style['container']}>
        <h1 className={style['title']}>COVID-19 Cases in the Philippines</h1>
      </div>
    );
  }
}
