import React, { Component } from 'react';

import './NavigationBar.scss';

interface INavigationBarProperty {}

interface INavigationBarState {
  toggleCollapse: boolean;
}

interface IRoutes {
  id: string;
  href: string;
  label: string;
  icon: string;
}

export default class NavigationBar extends Component<INavigationBarProperty, INavigationBarState> {

  private brandName: string = 'JOSHUA CLIFFORD REYES';

  private collapseStyle: Object = {
    'display': 'none'
  };

  private routes: Array<IRoutes> = [
    {
      id: 'home',
      href: '/',
      label: 'HOME',
      icon: 'fa-home',
    },
    {
      id: 'contact',
      href: 'contact',
      label: 'CONTACT',
      icon: 'fa-paper-plane-o'
    },
    {
      id: 'projects',
      href: 'projects',
      label: 'PROJECTS',
      icon: 'fa-magic'
    }
  ];

  public constructor(properties: any) {
    super(properties);
    this.state = {
      toggleCollapse: false,
    };
  }

  private defaultDetails(): JSX.Element {
    return (
      <div className="navbar-header page-scroll">
        <button onClick={this.toggleCollapse.bind(this, '')} type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span><i className="fa fa-bars"></i> MENU
        </button>
        <h1 className="navbar-brand">{this.brandName}</h1>
      </div>
    );
  }

  private toggleCollapse(): void {
    let toggled = false;
    
    this.collapseStyle = {
      'display': 'none'
    }
    
    if (! this.state.toggleCollapse) {
      toggled = true;

      this.collapseStyle = {
        'display': 'block'
      };
    }

    this.setState({ toggleCollapse: toggled });
  }

  private routesList(): JSX.Element {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={this.collapseStyle}>
        <ul className="nav navbar-nav navbar-right">
          {
            this.routes.map(route => {
              const href = route.href;
              const iconClassName = 'fa ' + route.icon;
              return (
                <li key={route.id} className="page-scroll">
                  <a href={href} rel="nofollow"><i className={iconClassName} aria-hidden="true"></i> {route.label}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  public render(): JSX.Element {
    return (
      <div className="NavigationBar">
        <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
            {this.defaultDetails()}
            {this.routesList()}
          </div>
        </nav>
      </div>
    );
  }
}
