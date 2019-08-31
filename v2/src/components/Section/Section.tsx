import React, { Component } from 'react';

import './Section.scss';

interface ISectionProperty {
  id: string;
  title: string;
}

interface ISectionState {}

export default class Section extends Component<ISectionProperty, ISectionState> {

  public render(): JSX.Element {
    return (
      <section key={this.props.id} className="Section">
        <h1 className="section-title">{this.props.title}</h1>
        <hr className="section-hr"></hr>
        {this.props.children}
      </section>
    );
  }
}
