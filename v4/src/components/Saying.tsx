import React, { Component } from 'react';

import * as styles from './Saying.module.scss';

interface SayingsData {
  sayings: SayingData[]
}

interface SayingData {
  id: string;
  saying: string;
  author: string;
}

export default class Sayings extends Component<{}, SayingsData> {

  public constructor(props: any) {
    
    super(props);

    // Reference: https://www.goodreads.com/quotes/tag/programming?page=5
    this.state = {
      sayings: [
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
        }
      ]
    };
  }

  private randomPickSaying(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public render(): JSX.Element {
    
    const sayings: SayingData[] = this.state.sayings;
    const selectedSaying: SayingData = sayings[this.randomPickSaying(0, (sayings.length - 1))];

    return (
      <div className={styles.container}>
        <p key={selectedSaying.id}>"{selectedSaying.saying}" - <i>{selectedSaying.author}</i></p>
      </div>
    );
  }
}
