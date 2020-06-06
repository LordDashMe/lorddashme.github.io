import React, { Component } from 'react';

import style from './PoweredBy.module.scss';

export default class PoweredBy extends Component {

  public render(): JSX.Element {
    return (
      <p id="powerd-by-component" className={style['container']}>
        {this.props.children}
      </p>
    );
  }
}
