import React, { Component } from 'react';

import style from './Section.module.scss';

interface IProperty {
  id: string;
  title: string;
  showThematicBreak: boolean;
  showBorderTop: boolean;
}

interface IState {}

/**
 * THIS COMPONENT IS REQUIRE TO LOAD IMMEDIATELY
 * IMPLEMENTING LAZY LOADING MAY CAUSE UNUSUAL EFFECT.
 */
export default class Section extends Component<IProperty, IState> {

  private getTitle(): JSX.Element | null {
    
    if (!this.props.title) {
      return null;
    }

    return (<h2 className={style['title']}>{this.props.title}</h2>);
  }

  public render(): JSX.Element {

    let thematicBreak: JSX.Element | null = null;
    let borderTop: string = '';

    if (this.props.showThematicBreak) {
      thematicBreak = (<hr className={style['breaker']}></hr>);
    }

    if (! this.props.showBorderTop) {
      borderTop = style['hide'];
    }

    return (
      <section id="section-component" key={this.props.id} className={style['container'] + ' ' + borderTop}>
        {this.getTitle()}
        {thematicBreak}
        {this.props.children}
      </section>
    );
  }
}
