import React, { Component } from 'react';

import style from './PageWrapper.module.scss';

interface IProperty {}

interface IState {}

/**
 * THIS COMPONENT IS REQUIRE TO LOAD IMMEDIATELY
 * IMPLEMENTING LAZY LOADING MAY CAUSE UNUSUAL EFFECT.
 */
export default class PageWrapper extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-page-wrapper-component" className={style['container']}>
        {this.props.children}
      </div>
    );
  }
}
