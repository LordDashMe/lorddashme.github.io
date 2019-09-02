import React, { Component } from 'react';

import './Author.scss';

interface IAuthorProperty {}

interface IAuthorState {}

export default class Author extends Component<IAuthorProperty, IAuthorState> {

  public render(): JSX.Element {
    return (
      <div className="Author">
        <div className="author-img">
          <img src="resources/img/profile-shanghai.jpg" alt="Joshua Clifford Reyes Profile" />
        </div>
        <div className="author-description">
          {/* <p>I'm JOSHUA CLIFFORD REYES (or you can call me DASH), currently enjoying the fields or roles of</p> */}
          <p>INFORMATION TECHNOLOGY | WEB DEVELOPER | MOBILE DEVELOPER | DEVOPS | COMPUTER NETWORK | DATA STRUCTURE | MULTIMEDIA</p>
        </div>
      </div>
    );
  }
}
