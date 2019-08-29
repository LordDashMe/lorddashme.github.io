import React, { Component } from 'react';

import './Loader.scss';

interface ILoaderProperty {
  visibility: boolean;
}

export default class Loader extends Component<ILoaderProperty, {}> {

  public render(): JSX.Element {

    let loaderClasses = 'signal-background';
    
    if (! this.props.visibility) {
      loaderClasses = 'signal-background out';
    }

    return (
      <div className="Loader">
        <div className={loaderClasses}>
          <div className="signal"></div>
        </div>
      </div>
    );
  }
}
