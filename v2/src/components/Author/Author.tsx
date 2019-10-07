import React, { Component } from 'react';

import style from './Author.module.scss';

interface IProperty {}

interface IState {
  author: IAuthor;
}

interface IAuthor {
  image: IImage;
  description: string;
}

interface IImage {
  path: string;
  alt: string;
}

export default class Author extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      author: {
        image: {
          path: 'resources/img/profile-shanghai-min-super.jpg',
          alt: 'Joshua Clifford Reyes'
        },
        description: 'INFORMATION TECHNOLOGY | WEB DEVELOPER | MOBILE DEVELOPER | DEVOPS | COMPUTER NETWORK | DATA STRUCTURE | MULTIMEDIA'
      }
    };
  }

  public render(): JSX.Element {
    return (
      <div className={style['container']}>
        <div className={style['display-photo']}>
          <img src={this.state.author.image.path} alt={this.state.author.image.alt} />
        </div>
        <p className={style['description']}>{this.state.author.description}</p>
      </div>
    );
  }
}
