import React, { Component } from 'react';
import { Link } from 'gatsby';

import style from './Tool.module.scss';

interface IProperty {}

interface IState {
  tools: ITool[]
}

interface ITool {
  id: string;
  title: string;
  description: string;
  link: string;
}

export default class Tool extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);

    this.state = {
      tools: [
        {
          id: 'requestify',
          title: 'REQUESTIFY',
          description: 'A simple simulation tool for HTTP request content type json.',
          link: '/tools/requestify/'
        },
        {
          id: 'strong-password-generator',
          title: 'STRONG PASSWORD GENERATOR',
          description: 'A tool use for generating random sequence of characters based on the given length.',
          link: '/tools/strong-password/'
        },
        {
          id: 'content-hiding',
          title: 'CONTENT HIDING',
          description: 'A simple tool for encrypting or decrypting data based on the selected option for the encryption algorithm.',
          link: '/tools/content-hiding/'
        },
        {
          id: 'content-hashing',
          title: 'CONTENT HASHING',
          description: 'Use to convert plain-text into hashed content and a feature to verify if the plain-text is match with the given hashed content.',
          link: ''
        },
        {
          id: 'css-minifier',
          title: 'CSS MINIFIER',
          description: 'A simple tool use for generating a minified version of provided CSS codes.',
          link: ''
        }
      ]
    };
  }

  private getTools(): JSX.Element[] {
    return this.state.tools.map((tool: ITool): JSX.Element => {

      let link: JSX.Element = (
        <div className={style['link']}>Under Development</div>
      );

      if (tool.link !== '') {
        link = (
          <div className={style['link']}>
            <Link to={tool.link}>Explore</Link>
          </div>
        );
      }

      return (
        <div key={tool.id} className={style['item']}>
          <h3 className={style['title']}>{tool.title}</h3>
          <p className={style['description']}>{tool.description}</p>
          {link}
        </div>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div id="tool-component" className={style['container']}>
        {this.getTools()}
      </div>
    );
  } 
}
