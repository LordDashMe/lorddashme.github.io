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
          id: 'statement_1',
          statement: 'Write code as if you had to support it for the rest of your life.',
          author: 'Yuriy Zubarev'
        },
        {
          id: 'statement_2',
          statement: 'Talk is cheap. Show me the code.',
          author: 'Linus Torvalds'
        },
        {
          id: 'statement_3',
          statement: 'Truth can only be found in one place: the code.',
          author: 'Robert C. Martin'
        },
        {
          id: 'statement_4',
          statement: 'The only way to go fast, is to go well.',
          author: 'Robert C. Martin'
        },
        {
          id: 'statement_5',
          statement: 'Learning the art of programming, like most other disciplines, consists of first learning the rules and then learning when to break them.',
          author: 'Joshua Bloch'
        },
        {
          id: 'statement_6',
          statement: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
          author: 'Martin Fowler'
        },
        {
          id: 'statement_7',
          statement: 'I\'m not a great programmer; I\'m just a good programmer with great habits.',
          author: 'Kent Beck'
        },
        {
          id: 'statement_8',
          statement: 'Walking on water and developing software from a specification are easy if both are frozen.',
          author: 'Edward V. Berard'
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
      <div id="statement-component" className={style['container']}>
        <p key={pickedStatement.id} className={style['content']}>"{pickedStatement.statement}" - <i>{pickedStatement.author}</i></p>
      </div>
    );
  }
}
