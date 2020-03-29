import React, { Component } from 'react';

import { isSSR } from '../../common/helper';

import Firestore from '../Database/Firebase/Firestore';

import style from './Headline.module.scss';

interface IProperty {}

interface IState {
  headline: IHeadline;
}

interface IHeadline {
  id: string;
  content: string;
}

export default class Headline extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);

    this.state = {
      headline: {
        id: '',
        content: ''
      }
    };
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.fetchHeadlineOnFireStore(); 
    }
  }

  private fetchHeadlineOnFireStore(): void {
    
    Firestore.clearInstance();
    Firestore.initialize();
    Firestore.getInstance()
      .collection('headlines')
      .where('active', '==', true)
      .limit(1)
      .get()
      .then((querySnapshot: any): void => {

        if (typeof querySnapshot.docs[0] !== 'undefined') {
          
          const document: any = querySnapshot.docs[0].data();

          this.setState({
            headline: {
              id: querySnapshot.docs[0].id,
              content: document.content
            }  
          });
        }        
      });
  }

  private getHeadlineContent(): JSX.Element {
    return (
      <div className={style['content']}>
        <small dangerouslySetInnerHTML={{ __html: this.state.headline.content }}></small>
      </div>
    );
  }

  public render(): JSX.Element {
    
    if (!this.state.headline.content) {
      return (<div></div>);  
    }

    return (
      <div id="headline-component" className={style['container']}>
        {this.getHeadlineContent()}
      </div>
    );
  }
}
