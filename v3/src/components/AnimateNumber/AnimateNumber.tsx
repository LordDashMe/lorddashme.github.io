import React, { Component } from 'react';
import raf from 'raf';

interface IAnimateNumberProperty {
  value: number;
}

interface IAnimateNumberState {
  number: number;
}

export default class AnimateNumber extends Component<IAnimateNumberProperty, IAnimateNumberState> {

  private animated: any = null;

  public constructor(properties: any) {
    super(properties);

    this.state = {
      number: 0
    };
  }

  public componentDidMount(): void {
    this.animated = raf(this.getAnimated.bind(this));
  }

  private getAnimated(): void {

    if (!this.props.value) {
      return;
    }

    let number = this.state.number;

    if (number >= this.props.value) {
      raf.cancel(this.animated);
      this.setState({
        number: this.props.value
      });
      return;
    }

    number += Math.ceil(this.props.value / 60);

    this.setState({
      number: number
    });

    this.animated = raf(this.getAnimated.bind(this));
  }

  public render(): JSX.Element {
    return (
      <span id="animate-number-component">{this.state.number}</span>
    );
  }
}
