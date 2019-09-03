import React, { Component } from 'react';

import './Section.scss';

interface ISectionProperty {
  id: string;
  title: string;
  showThematicBreak: boolean;
}

interface ISectionState {}

export default class Section extends Component<ISectionProperty, ISectionState> {

  public render(): JSX.Element {
    let thematicBreak = null;
    if (this.props.showThematicBreak) {
      thematicBreak = (<hr className="section-hr"></hr>);
    }
    return (
      <section key={this.props.id} className="Section">
        <h1 className="section-title">{this.props.title}</h1>
        {thematicBreak}
        {this.props.children}
      </section>
    );
  }
}
