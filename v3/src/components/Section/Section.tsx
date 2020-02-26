import React, { Component } from 'react';

import style from './Section.module.scss';

interface ISectionProperty {
  id: string;
  title: string;
  showThematicBreak: boolean;
  showBorderTop: boolean;
}

interface ISectionState {}

export default class Section extends Component<ISectionProperty, ISectionState> {

  public render(): JSX.Element {

    let thematicBreak = null;

    if (this.props.showThematicBreak) {
      thematicBreak = (<hr className={style['breaker']}></hr>);
    }

    let borderTop = null;
    
    if (! this.props.showBorderTop) {
      borderTop = style['hide'];
    }

    return (
      <section id="section-component" key={this.props.id} className={style['container'] + ' ' + borderTop}>
        <h2 className={style['title']}>{this.props.title}</h2>
        {thematicBreak}
        {this.props.children}
      </section>
    );
  }
}
