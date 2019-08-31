import React, { Component } from 'react';

import './Statement.scss';

interface IStatementProperty {
  statement: string;
  author: string;
}

interface IStatementState {}

export default class Statement extends Component<IStatementProperty, IStatementState> {

  public render(): JSX.Element {
    return (
      <div className="Statement">
        <p className="statement-content">"{this.props.statement}" - <i>{this.props.author}</i></p>
      </div>
    );
  }
}
