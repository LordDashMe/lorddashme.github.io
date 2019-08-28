import React, { Component } from 'react';

import './Statement.scss';

export default class Statement extends Component {

  private statement: string = '"Write code as if you had to support it for the rest of your life."';
  private author: string = 'Yuriy Zubarev';

  public render(): JSX.Element {
    return (
      <div className="Statement">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <p>{this.statement} - <i>{this.author}</i></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
