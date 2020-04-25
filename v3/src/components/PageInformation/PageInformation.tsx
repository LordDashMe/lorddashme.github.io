import React, { Component } from 'react';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../../common/helper';

import Section from '../../components/Section/Section';

const NavigationBar = loadable(() => import('../../components/NavigationBar/NavigationBar'), { fallback: loadableFallbackTemplate(`#navigation-bar-component`) });
const Headline = loadable(() => import('../../components/Headline/Headline'), { fallback: loadableFallbackTemplate(`#headline-component`) });
const PageWrapper = loadable(() => import('../../components/PageWrapper/PageWrapper'), { fallback: loadableFallbackTemplate(`#page-wrapper-component`) });
const Statement = loadable(() => import('../../components/Statement/Statement'), { fallback: loadableFallbackTemplate(`#statement-component`) });
const Footer = loadable(() => import('../../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });

import style from './PageInformation.module.scss';

interface IProperty {
  id: string;
  title: string;
  primaryIcon: string;
  description: string;
}

interface IState {}

/**
 * THIS COMPONENT IS REQUIRE TO LOAD IMMEDIATELY
 * IMPLEMENTING LAZY LOADING MAY CAUSE UNUSUAL EFFECT.
 */
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
