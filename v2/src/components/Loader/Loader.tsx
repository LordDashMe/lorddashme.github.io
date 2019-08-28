import React, { Component } from 'react';

import './Loader.scss';

export default class Loader extends Component<{ visibility: boolean }, {}> {

  public render() {
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
