import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Headline from '../../components/Headline/Headline';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Section from '../../components/Section/Section';
import Statement from '../../components/Statement/Statement';
import Footer from '../../components/Footer/Footer';

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
      <div id="page-information-component" className={style['container']}>
        <NavigationBar />
        <Headline />
        <PageWrapper>
          <div className={style['wrapper']}>
            <Section 
              id={this.props.id} 
              title={this.props.title} 
              showThematicBreak={false} 
              showBorderTop={false}>
              <div className={style['content']}>
                <i className={style['icon'] + ' ' + this.props.primaryIcon}></i>
                <p className={style['description']}>{this.props.description}</p>
              </div>
              <Statement />
            </Section>
          </div>
        </PageWrapper>
        <Footer isFixedPosition={false}/>
      </div>
    );
  }
}
