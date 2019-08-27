import React, { Component } from 'react';

import './Statement.css';

class Statement extends Component {

  statement = '"Write code as if you had to support it for the rest of your life."';
  author = 'Yuriy Zubarev';

  render() {
    return (
      <div className="Statement">
        <div className="col-lg-12">
          <div className="content">
            <p>{this.statement} - <i>{this.author}</i></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Statement;
