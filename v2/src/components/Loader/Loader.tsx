import React, { Component } from 'react';

import './Loader.scss';

interface ILoaderProperty {
  visibility: boolean;
}

interface ILoaderState {}

export default class Loader extends Component<ILoaderProperty, ILoaderState> {

  public render(): JSX.Element {

    let loaderClasses = 'loader-signal-background';
    
    if (! this.props.visibility) {
      loaderClasses = 'loader-signal-background out';
    }

    return (
      <div className="Loader">
        <div className={loaderClasses}>
          <div className="loader-signal"></div>
        </div>
      </div>
    );
  }
}
