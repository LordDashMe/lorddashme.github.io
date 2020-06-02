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

  private getBorderTopStyleClassName(): string {
    
    if (!this.props.showBorderTop) {
      return style['hide'];
    }

    return '';
  }
  
  private getTitle(): JSX.Element | null {
    
    if (!this.props.title) {
      return null;
    }

    return (<h2 className={style['title']}>{this.props.title}</h2>);
  }

  private getThematicBreak(): JSX.Element {

    if (this.props.showThematicBreak) {
      return (<hr className={style['breaker']}></hr>);
    }
    
    return (<br/>);
  }

  public render(): JSX.Element {
    return (
      <section 
        id={this.props.id} 
        className={style['container'] + ' ' + this.getBorderTopStyleClassName()}>
        {this.getTitle()}
        {this.getThematicBreak()}
        {this.props.children}
      </section>
    );
  }
}
