import React, { Component } from 'react';

import style from './Loader.module.scss';

interface IProperty {
  visibility: boolean;
}

interface IState {}

export default class Loader extends Component<IProperty, IState> {

  public render(): JSX.Element {

    let loaderClasses = style['signal-wrapper'];
    
    if (! this.props.visibility) {
      loaderClasses += ' ' + style['off'];
    }

    return (
      <div id="loader-component" className={style['container']}>
        <div className={loaderClasses}>
          <div className={style['signal']}></div>
        </div>
      </div>
    );
  }
}
