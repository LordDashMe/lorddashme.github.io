import React, { Component } from 'react';

import style from './Section.module.scss';

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
      thematicBreak = (<hr className={style['breaker']}></hr>);
    }

    return (
      <section key={this.props.id} className={style['container']}>
        <h2 className={style['title']}>{this.props.title}</h2>
        {thematicBreak}
        {this.props.children}
      </section>
    );
  }
}
