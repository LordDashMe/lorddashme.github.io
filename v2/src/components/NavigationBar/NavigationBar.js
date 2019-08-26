import React, { Component } from 'react';

import './NavigationBar.css';

class NavigationBar extends Component {

  state = {
    toggleCollapse: false,
  };

  collapseStyle = {
    'display': 'none'
  };

  routes = [
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

  toggleCollapse = () => {
    let toggled = false;
    if (! this.state.toggleCollapse) {
      this.collapseStyle = {
        'display': 'block'
      };
      toggled = true;
    } else {
      this.collapseStyle = {
        'display': 'none'
      }
    }
    this.setState({
      toggleCollapse: toggled
    });
  }

  routesList = () => {
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

  render() {
    return (
      <div className="NavigationBar">
        <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
            <div className="navbar-header page-scroll">
              <button onClick={this.toggleCollapse} type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span><i className="fa fa-bars"></i> MENU
              </button>
              <h1 className="navbar-brand">JOSHUA CLIFFORD REYES</h1>
            </div>
            {this.routesList()}
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
