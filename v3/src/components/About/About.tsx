import React, { Component } from 'react';

import style from './About.module.scss';

interface IProperty {}

interface IState {
  about: IAbout[]
}

interface IAbout {
  id: string;
  icon: string;
  statement: string;
}

export default class About extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      about: [
        {
          id: 'first_statement',
          icon: 'fas fa-thumbs-up',
          statement: 'Adaptability, always aim to provide application in the best possible implementation using some best practices and design patterns.'
        },
        {
          id: 'second_statement',
          icon: 'fas fa-graduation-cap',
          statement: 'Eager to learn more in the forte field. Self motivated. Initiative with a high level of energy. Problem analysis and problem solving.'
        }
      ]
    };
  }

  private getAboutContent(): JSX.Element[] {
    return this.state.about.map(about => {
      return (
        <div key={about.id} className={style['wrapper']}>
          <i className={style['icon'] + ' ' + about.icon}></i>
          <p className={style['statement']}>{about.statement}</p>
        </div> 
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div id="about-component" className={style['container']}>
        {this.getAboutContent()}
      </div>
    );
  }
}
