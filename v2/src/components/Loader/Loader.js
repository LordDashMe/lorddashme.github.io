import React, { Component } from 'react';

import './Loader.css';

class Loader extends Component {

  render() {
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

export default Loader;
