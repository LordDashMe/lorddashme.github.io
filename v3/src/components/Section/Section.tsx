import React, { Component } from 'react';

import style from './Section.module.scss';

interface IProperty {
  id: string;
  title: string;
  showThematicBreak: boolean;
  showBorderTop: boolean;
}

interface IState {}

export default class Section extends Component<IProperty, IState> {

  public render(): JSX.Element {

    let thematicBreak: JSX.Element | null = null;

    if (this.props.showThematicBreak) {
      thematicBreak = (<hr className={style['breaker']}></hr>);
    }

    let borderTop: string | null = null;
    
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
