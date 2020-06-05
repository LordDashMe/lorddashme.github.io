import React, { Component } from 'react';
import { Link } from 'gatsby';

import style from './NavigationBar.module.scss';

interface IProperty {}

interface IState {
  brandName: string;
  routes: IRoute[];
  collapseStyle: object;
  toggleCollapse: boolean;
}

interface IRoute {
  id: string;
  href: string;
  label: string;
  icon: string;
}

export default class NavigationBar extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      brandName: 'JOSHUA CLIFFORD REYES',
      routes: [
        {
          id: 'home',
          href: '/',
          label: 'HOME',
          icon: 'fas fa-home',
        },
        {
          id: 'contact',
          href: '/contact/',
          label: 'CONTACT',
          icon: 'fas fa-paper-plane'
        },
        {
          id: 'projects',
          href: '/projects/',
          label: 'PROJECTS',
          icon: 'fas fa-magic'
        },
        {
          id: 'tools',
          href: '/tools/',
          label: 'TOOLS',
          icon: 'fas fa-heart'
        }
      ],
      collapseStyle: {
        'display': 'none'
      },
      toggleCollapse: false,
    };
  }

  private defaultDetails(): JSX.Element {
    return (
      <div className="navbar-header page-scroll">
        <button 
          onClick={this.toggleCollapse.bind(this, '')} 
          type="button" 
          className={'navbar-toggle ' + style['navigation-bar-toggle']} 
          data-toggle="collapse" 
          data-target="#navigation-bar-collapsable">
          <i className="fa fa-bars"></i> MENU
        </button>
        <h1 className={'navbar-brand ' + style['navigation-bar-title']}>{this.state.brandName}</h1>
      </div>
    );
  }

  private toggleCollapse(): void {
    
    let toggled: boolean = false;
    let collapseStyle: object = {
      'display': 'none'
    };
    
    if (!this.state.toggleCollapse) {
      toggled = true;
      collapseStyle = {
        'display': 'block'
      };
    }

    const state: IState = {...this.state};

    state['collapseStyle'] = collapseStyle;
    state['toggleCollapse'] = toggled;

    this.setState(state);
  }

  private getMenuLinks(): JSX.Element {
    return (
      <div 
        className={'collapse navbar-collapse ' + style['navigation-bar-collapse']} 
        id="navigation-bar-collapsable" 
        style={this.state.collapseStyle}>
        <ul className="nav navbar-nav navbar-right">
          {this.getRoutes()}
        </ul>
      </div>
    );
  }

  private getRoutes(): JSX.Element[] {
    
    return this.state.routes.map((route: IRoute) => {

      const href: string = route.href;

      if (route.id === 'home') {
        return (
          <li key={route.id} className="page-scroll">
            <a href={href}>
              <i className={route.icon} aria-hidden="true"></i> {route.label}
            </a>
          </li>
        );
      }
      
      return (
        <li key={route.id} className="page-scroll">
          <Link to={href}>
            <i className={route.icon} aria-hidden="true"></i> {route.label}
          </Link>
        </li>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div id="navigation-bar-component" className={style['container']}>
        <nav className={'navbar navbar-fixed-top ' + style['navigation-bar']}>
          <div className="container">
            {this.defaultDetails()}
            {this.getMenuLinks()}
          </div>
        </nav>
      </div>
    );
  }
}
