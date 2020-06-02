import React, { Component } from 'react';

import style from './Loader.module.scss';

interface IProperty {
  visibility: boolean;
}

interface IState {}

export default class Loader extends Component<IProperty, IState> {

  private getLoader(): JSX.Element {

    let loaderClasses: string = style['signal-wrapper'];
    
    if (!this.props.visibility) {
      loaderClasses += ' ' + style['off'];
    }

    return (
      <div className={loaderClasses}>
        <div className={style['signal']}></div>
      </div>
    );
  }

  public render(): JSX.Element {
    return (
      <div id="loader-component" className={style['container']}>
        {this.getLoader()}
      </div>
    );
  }
}
