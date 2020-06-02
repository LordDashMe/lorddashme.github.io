import React, { Component } from 'react';
import raf from 'raf';

interface IProperty {
  value: number;
  isCommaSeparated?: boolean;
  fps?: number;
}

interface IState {
  number: number;
}

export default class AnimateNumber extends Component<IProperty, IState> {

  private static readonly DEFAULT_FPS: number = 60;

  private animated: any = null;

  public constructor(properties: any) {
    
    super(properties);
    
    this.state = {
      number: 0
    }
  }

  public componentDidMount(): void {
    this.animated = raf(this.getAnimated.bind(this));
  }

  private getAnimated(): void {

    if (!this.props.value) {
      return;
    }

    let number: number = this.state.number;

    // Stop the animation if the value of the original number
    // is lower than the counting number.
    if (number >= this.props.value) {
      raf.cancel(this.animated);
      this.setNumber(this.props.value);
      return;
    }

    let fps: number = AnimateNumber.DEFAULT_FPS;
    
    if (typeof this.props.fps !== 'undefined' && this.props.fps) {
      fps = this.props.fps;
    }

    number += Math.ceil(this.props.value / fps);

    this.setNumber(number);
    this.animated = raf(this.getAnimated.bind(this));
  }

  private setNumber(number: number): void {
    this.setState({ number: number });
  }

  private convertCommaSeparatedNumber(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  private getNumber(): number | string {
    
    if (typeof this.props.isCommaSeparated !== 'undefined' && this.props.isCommaSeparated) {
      return this.convertCommaSeparatedNumber(this.state.number);
    }

    return this.state.number;
  }

  public render(): JSX.Element {
    return (<span id="animation-animate-number-component">{this.getNumber()}</span>);
  }
}
