import React, { Component } from 'react';

interface IProperty {
  id: string;
  visibilityFlag: boolean;
  reRender?: boolean;
}

interface IState {}

export default class LazyLoadBlock extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
  }

  public shouldComponentUpdate(nextProps: any) {
    return (
      this.props.visibilityFlag !== nextProps.visibilityFlag || 
      (typeof this.props.reRender !== 'undefined' && this.props.reRender !== nextProps.reRender)
    );
  }

  public render(): JSX.Element {
    return (
      <div id={'lazyload-block-' + this.props.id}>
        { this.props.visibilityFlag ? this.props.children : null }
      </div>
    );
  }
}
