import React, { Component } from 'react';

import * as styles from './Saying.module.scss';

interface SayingData {
  id: string;
  saying: string;
  author: string;
}

// Reference: https://www.goodreads.com/quotes/tag/programming?page=5
const sayings: SayingData[] = [
  {
    id: 'saying_1',
    saying: 'Write code as if you had to support it for the rest of your life.',
    author: 'Yuriy Zubarev'
  },
  {
    id: 'saying_2',
    saying: 'Talk is cheap. Show me the code.',
    author: 'Linus Torvalds'
  },
  {
    id: 'saying_3',
    saying: 'Truth can only be found in one place: the code.',
    author: 'Robert C. Martin'
  },
  {
    id: 'saying_4',
    saying: 'The only way to go fast, is to go well.',
    author: 'Robert C. Martin'
  },
  {
    id: 'saying_5',
    saying: 'Learning the art of programming, like most other disciplines, consists of first learning the rules and then learning when to break them.',
    author: 'Joshua Bloch'
  },
  {
    id: 'saying_6',
    saying: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler'
  },
  {
    id: 'saying_7',
    saying: 'I\'m not a great programmer; I\'m just a good programmer with great habits.',
    author: 'Kent Beck'
  },
  {
    id: 'saying_8',
    saying: 'Walking on water and developing software from a specification are easy if both are frozen.',
    author: 'Edward V. Berard'
  },
  {
    id: 'saying_9',
    saying: 'Legends say, there are 10 types of people in this world those who understand binary and those who don\'t.',
    author: 'Unknown'
  },
  {
    id: 'saying_10',
    saying: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston S. Churchill'
  },
  {
    id: 'saying_11',
    saying: 'The road to success and the road to failure are almost exactly the same.',
    author: 'Colin R. Davis'
  },
  {
    id: 'saying_12',
    saying: 'Success usually comes to those who are too busy looking for it.',
    author: 'Henry David Thoreau'
  }
];

interface SayingsState {
  saying: SayingData | null;
}

export default class Sayings extends Component<{}, SayingsState> {

  public constructor(props: any) {
    
    super(props);

    this.state = { saying: null };
  }

  public componentDidMount(): void {
    
    this.setState({
      saying: sayings[this.randomPickSaying(0, (sayings.length - 1))]
    });
  }

  private randomPickSaying(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public render(): JSX.Element {

    let content: JSX.Element = <React.Fragment></React.Fragment>;

    if (this.state.saying) {
      content = <p key={this.state.saying.id}>"{this.state.saying.saying}" - <i>{this.state.saying.author}</i></p>;
    }

    return (
      <div className={styles.container}>{content}</div>
    );
  }
}
