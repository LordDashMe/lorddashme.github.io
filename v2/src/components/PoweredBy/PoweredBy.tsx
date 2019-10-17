import React, { Component } from 'react';

import style from './PoweredBy.module.scss';

export default class About extends Component {

  public render(): JSX.Element {
    return (
      <div className={style['container']}>
        {this.props.children}
      </div>
    );
  }
}
