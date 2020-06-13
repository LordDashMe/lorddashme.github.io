import React, { Component, MouseEventHandler } from 'react';

import { themeConstant } from '../../common/helper';

import style from './ThemeMode.module.scss';

interface IProperty {
  onToggle: MouseEventHandler;
  theme?: string;
}

interface IState {}

export default class ThemeMode extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public render(): JSX.Element {
    return (
      <div 
        id="night-shift-mode-component" 
        className={style['container'] + ' ' + (this.props.theme === themeConstant.DARK ? style['night'] : style['sun'])}
        onClick={this.props.onToggle}>
        <i className={this.props.theme === themeConstant.DARK ? 'fas fa-cloud-sun' : 'fa fa-moon'} aria-hidden="true"></i>
      </div>
    );
  }
}
