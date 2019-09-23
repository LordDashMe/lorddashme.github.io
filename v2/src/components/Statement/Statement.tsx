import React, { Component } from 'react';

import style from './Statement.module.scss';

interface IProperty {}

interface IState {
  statements: Array<IStatement>
}

interface IStatement {
  id: string;
  statement: string;
  author: string;
}

export default class Statement extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
    this.state = {
      statements: [ // Reference: https://www.goodreads.com/quotes/tag/programming?page=5
        {
          id: 'first_statement',
          statement: 'Write code as if you had to support it for the rest of your life.',
          author: 'Yuriy Zubarev'
        },
        {
          id: 'second_statement',
          statement: 'Talk is cheap. Show me the code.',
          author: 'Linus Torvalds'
        },
        {
          id: 'third_statement',
          statement: 'Truth can only be found in one place: the code.',
          author: 'Robert C. Martin'
        },
        {
          id: 'fourth_statement',
          statement: 'The only way to go fast, is to go well.',
          author: 'Robert C. Martin'
        },
        {
          id: 'fifth_statement',
          statement: 'Learning the art of programming, like most other disciplines, consists of first learning the rules and then learning when to break them.',
          author: 'Joshua Bloch'
        }
      ]
    };
  }

  private pickNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public render(): JSX.Element {

    const statements = this.state.statements;
    const pickedNumber = this.pickNumber(0, (statements.length - 1));
    const pickedStatement = statements[pickedNumber];

    return (
      <div className={style['container']}>
        <p key={pickedStatement.id} className={style['content']}>"{pickedStatement.statement}" - <i>{pickedStatement.author}</i></p>
      </div>
    );
  }
}
