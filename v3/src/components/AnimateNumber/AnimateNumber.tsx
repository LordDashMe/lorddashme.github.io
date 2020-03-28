import React, { Component } from 'react';
import raf from 'raf';

interface IProperty {
  value: number;
  isCommaSeparated: boolean;
  fps: number;
}

interface IState {
  number: number;
  commaSeparated: string;
}

export default class AnimateNumber extends Component<IProperty, IState> {

  private static readonly DEFAULT_FPS: number = 60;

  private animated: any = null;

  public constructor(properties: any) {
    
    super(properties);
    
    this.state = {
      number: 0,
      commaSeparated: '0'
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
    if (number >= this.props.value) {
      raf.cancel(this.animated);
      this.setNumber(this.props.value);
      return;
    }

    let fps: number = AnimateNumber.DEFAULT_FPS;
    if (this.props.fps) {
      fps = this.props.fps;
    }

    number += Math.ceil(this.props.value / fps);

    this.setNumber(number);
    this.animated = raf(this.getAnimated.bind(this));
  }

  private setNumber(number: number): void {
    this.setState({
      number: number,
      commaSeparated: number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    });
  }

  private getNumber(): number | string {

    if (this.props.isCommaSeparated) {
      return this.state.commaSeparated;
    }
    
    return this.state.number;
  }

  public render(): JSX.Element {
    return (
      <span id="animate-number-component">{this.getNumber()}</span>
    );
  }
}
