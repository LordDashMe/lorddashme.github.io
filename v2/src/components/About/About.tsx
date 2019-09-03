import React, { Component } from 'react';

import './About.scss';

export default class About extends Component {

  public render(): JSX.Element {
    return (
      <div className="About">
        <div className="about-content">
            <i className="about-icon fa fa-thumbs-up"></i>
            <p className="about-statement">
                Adaptability, always aim to provide application in the best possible implementation using some best practices and design patterns.
            </p>
        </div>
        <div className="about-content">
            <i className="about-icon fa fa-graduation-cap"></i>
            <p className="about-statement">
                Eager to learn more in the forte field. Self motivated. Initiative with a high level of energy. Problem analysis and problem solving.
            </p>
        </div>
      </div>
    );
  }
}
