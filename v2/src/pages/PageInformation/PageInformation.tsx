import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Section from '../../components/Section/Section';
import Footer from '../../components/Footer/Footer';

import './PageInformation.scss';

interface IProperty {
  id: string;
  pageTitle: string;
  title: string;
  primaryIcon: string;
  description: string;
}

interface IState {}

export default class PageInformation extends Component<IProperty, IState> {

  public render(): JSX.Element {
    document.title = this.props.pageTitle;
    return (
      <div className="PageInformation">
        <NavigationBar />
        <div className="page-wrapper">
          <Section id={this.props.id} title={this.props.title} showThematicBreak={false}>
            <div className="page-information-content">
              <i className={'page-information-icon ' + this.props.primaryIcon}></i>
              <p className="page-information-description">{this.props.description}</p>
            </div>
          </Section>
        </div>
        <Footer />
      </div>
    );
  }
}
