import React, { Component } from 'react';

import { isSSR } from '../../common/helper';

import Cookies from '../Database/Cookies';

import style from './NightShiftMode.module.scss';

interface IProperty {
  onToggle?: Function;
}

interface IState {
  isToggled: boolean;
}

export default class NightShiftMode extends Component<IProperty, IState> {

  public static readonly COOKIE_NAME: string  = 'LDM_NIGHT_SHIFT_MODE';

  private isFullyMounted: boolean = false;

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      isToggled: false
    };
  }

  public set isMounted(status: boolean) {
    this.isFullyMounted = status;
  }

  public get isMounted(): boolean {
    return this.isFullyMounted;
  }

  public componentWillUnmount(): void {
    if (!isSSR()) {
      this.isMounted = false;
    }
  }

  public componentDidMount(): void {
    if (!isSSR()) {
      this.isMounted = true;
      this.getCookie(); 
    }
  }

  private getCookie(): void {

    if (this.isMounted) {

      const newState = {...this.state};

      const cookie = new Cookies();

      newState['isToggled'] = (cookie.get(NightShiftMode.COOKIE_NAME) === 'yes' ? true : false);

      this.setState(newState);
    }
  }

  private toggle(): void {

    const newState = {...this.state};

    newState['isToggled'] = (!newState['isToggled']);

    this.setState(newState);
    
    if (!isSSR()) {
      this.setCookie(newState['isToggled']);
    }
    if (this.props.onToggle) {
      this.props.onToggle(newState['isToggled']);
    }
  }

  private setCookie(isToggled: boolean): void {
    
    const cookie = new Cookies();
    
    cookie.set(NightShiftMode.COOKIE_NAME, (isToggled ? 'yes' : 'no'));
  }

  public render(): JSX.Element {
    console.log('faab', this.state);
    return (
      <div 
        id="night-shift-mode-component" 
        className={style['container'] + ' ' + (this.state.isToggled ? style['night'] : style['sun'])}
        onClick={this.toggle.bind(this)}>
        <i className={this.state.isToggled ? 'fas fa-cloud-sun' : 'fa fa-moon'} aria-hidden="true"></i>
      </div>
    );
  }
}
