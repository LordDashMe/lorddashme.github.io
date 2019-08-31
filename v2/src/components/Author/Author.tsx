import React, { Component } from 'react';

import './Author.scss';

interface IAuthorProperty {}

interface IAuthorState {}

export default class Author extends Component<IAuthorProperty, IAuthorState> {

  public render(): JSX.Element {
    return (
      <div className="Author">
        <div className="author-img">
          <img src="resources/img/profile-taiwan-tour.jpg" alt="Joshua Clifford Reyes Profile" />
        </div>
        <p>Joshua Clifford Reyes (or you can call me Dash)</p>
        <p>currently enjoying the fields or roles of</p>
        <p>INFORMATION TECHNOLOGY | WEB DEVELOPER | MOBILE DEVELOPER</p>
        <p>DEVOPS | COMPUTER NETWORK | DATA STRUCTURE | MULTIMEDIA</p>
      </div>
    );
  }
}
