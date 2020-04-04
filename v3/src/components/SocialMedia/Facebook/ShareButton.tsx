import React, { Component } from 'react';

interface IProperty {
  href: string;
  layout?: string;
  size?: string;
}

interface IState {}

export default class ShareButton extends Component<IProperty, IState> {

  public render(): JSX.Element {

    let layout = 'button';
    let size = 'small';

    if (typeof this.props.layout !== 'undefined' && this.props.layout) {
      layout = this.props.layout;
    }

    if (typeof this.props.size !== 'undefined' && this.props.size) {
      size = this.props.size;
    }

    return (
      <div id="social-media-facebook-share-button-component">
        <div 
          className="fb-share-button" 
          data-href={this.props.href}
          data-layout={layout} 
          data-size={size}>
        </div>
      </div>
    );
  }
}
