import React, { Component } from 'react';

import { isSSR } from '../../common/helper';

import Firestore from '../Database/Firebase/Firestore';

import style from './Headline.module.scss';

declare global {
  interface Window {
    lorddashme_headline: IHeadline;
  }
}

interface IProperty {}

interface IState {
  headline: IHeadline;
}

interface IHeadline {
  id: string;
  content: string;
  visibility: boolean;
}

export default class Headline extends Component<IProperty, IState> {

  private isFullyMounted: boolean = false;

  public constructor(properties: any) {
    super(properties);

    this.state = {
      headline: {
        id: '',
        content: '',
        visibility: true
      }
    };
  }

  public set isMounted(status: boolean) {
    this.isFullyMounted = status;
  }

  public get isMounted(): boolean {
    return this.isFullyMounted;
  }

  public componentWillUnmount(): void {
    if (! isSSR()) {
      this.isMounted = false;
    }
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.isMounted = true;
      this.fetchHeadlineOnFireStore(); 
    }
  }

  private fetchHeadlineOnFireStore(): void {

    if (typeof window.lorddashme_headline === 'undefined') {
      
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

            const headline = {...this.state.headline};

            headline['id'] = querySnapshot.docs[0].id;
            headline['content'] = document.content;

            window.lorddashme_headline = headline;

            if (this.isMounted) {
              this.setState({
                headline: headline  
              });
            }
            
            console.log('Headline_Component: Fresh headline!');
          }        
        });

    } else {

      this.setState({
        headline: {
          id: window.lorddashme_headline.id,
          content: window.lorddashme_headline.content,
          visibility: window.lorddashme_headline.visibility
        }  
      });
    }
  }

  private getHeadlineContent(): JSX.Element {
    return (
      <div className={style['content']}>
        <small dangerouslySetInnerHTML={{ __html: this.state.headline.content }}></small>
      </div>
    );
  }

  private getHeadlineCloseButton(): JSX.Element {
    return (
      <div className={style['close']} onClick={this.onClickHeadlineCloseButton.bind(this)}>
        <i className="fas fa-times" aria-hidden="true"></i>
      </div>
    );
  }

  private onClickHeadlineCloseButton(): void {

    const headline = {...this.state.headline};

    headline['visibility'] = false;

    window.lorddashme_headline = headline;

    this.setState({
      headline: headline
    });
  }

  public render(): JSX.Element | null {
    
    if (!this.state.headline.content || !this.state.headline.visibility) {
      return null;  
    }

    return (
      <div id="headline-component" className={style['container']}>
        {this.getHeadlineContent()}
        {this.getHeadlineCloseButton()}
      </div>
    );
  }
}
