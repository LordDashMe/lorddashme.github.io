import React, { Component } from 'react';

import style from './PoweredBy.module.scss';

export default class PoweredBy extends Component {

  public render(): JSX.Element {
    return (
      <div id="powerd-by-component" className={style['container']}>
        <small>{this.props.children}</small>
      </div>
    );
  }
}
