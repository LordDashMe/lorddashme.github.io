import React, { Component } from 'react';

import './About.scss';

interface IAboutContent {
  id: string;
  icon: string;
  statement: string;
}

export default class About extends Component {

  private aboutContents: Array<IAboutContent> = [
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
  ];

  public render(): JSX.Element {
    return (
      <div className="About">
        {
          this.aboutContents.map(aboutContents => {
            return (
              <div className="a-wrapper">
                <i className={'a-icon ' + aboutContents.icon}></i>
                <p className="a-statement">{aboutContents.statement}</p>
              </div> 
            );
          })
        }
      </div>
    );
  }
}
