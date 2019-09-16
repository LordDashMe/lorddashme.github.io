import React, { Component } from 'react';

import Loader from '../Loader/Loader';
import NavigationBar from '../NavigationBar/NavigationBar';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';

import './PageInformation.scss';

interface IProperty {
  id: string;
  pageTitle: string;
  title: string;
  primaryIcon: string;
  description: string;
}

interface IState {
  loaderVisibility: boolean;
}

export default class PageInformation extends Component<IProperty, IState> {

  public constructor(properties: IProperty) {
    super(properties);

    this.state = {
      loaderVisibility: true
    }
  }

  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaderVisibility: false 
      });
    }, 0);
  }

  public render(): JSX.Element {
    document.title = this.props.pageTitle;
    return (
      <div className="PageInformation">
        <Loader visibility={this.state.loaderVisibility} />
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
