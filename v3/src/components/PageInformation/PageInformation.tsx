import React, { Component } from 'react';

import NavigationBar from '../NavigationBar/NavigationBar';
import PageWrapper from '../PageWrapper/PageWrapper';
import Section from '../Section/Section';
import Statement from '../Statement/Statement';
import Footer from '../Footer/Footer';

import style from './PageInformation.module.scss';

interface IProperty {
  id: string;
  title: string;
  primaryIcon: string;
  description: string;
}

interface IState {}

export default class PageInformation extends Component<IProperty, IState> {

  public render(): JSX.Element {
    
    return (
      <div className={style['container']}>
        <NavigationBar />
        <PageWrapper>
          <Section id={this.props.id} 
                   title={this.props.title} 
                   showThematicBreak={false} 
                   showBorderTop={false}>
            <div className={style['content']}>
              <i className={style['icon'] + ' ' + this.props.primaryIcon}></i>
              <p className={style['description']}>{this.props.description}</p>
            </div>
          </Section>
          <Statement />
        </PageWrapper>
        <Footer isFixedPosition={false}/>
      </div>
    );
  }
}
