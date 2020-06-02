import React, { Component } from 'react';

import style from './PageLayout.module.scss';

export default class PageLayout extends Component {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-page-layout-component" className={style['container']}>
        {this.props.children}
      </div>
    );
  }
}
