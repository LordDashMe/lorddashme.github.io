import React, { Component } from 'react';

import './Author.scss';

export default class Author extends Component {

  public render(): JSX.Element {
    return (
      <div className="Author">
        <div className="author-img">
          <img src="resources/img/profile-shanghai-min-super.jpg" alt="Joshua Clifford Reyes Profile" />
        </div>
        <div className="author-description">
          <p>INFORMATION TECHNOLOGY | WEB DEVELOPER | MOBILE DEVELOPER | DEVOPS | COMPUTER NETWORK | DATA STRUCTURE | MULTIMEDIA</p>
        </div>
      </div>
    );
  }
}
