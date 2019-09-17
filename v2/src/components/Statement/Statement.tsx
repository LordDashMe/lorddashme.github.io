import React, { Component } from 'react';

import style from './Statement.module.scss';

interface IStatementProperty {
  statement: string;
  author: string;
}

interface IStatementState {}

export default class Statement extends Component<IStatementProperty, IStatementState> {

  public render(): JSX.Element {
    return (
      <div className={style['container']}>
        <p className={style['content']}>"{this.props.statement}" - <i>{this.props.author}</i></p>
      </div>
    );
  }
}
