import React, { Component } from 'react';

import COMMON_CONFIGURATION from '../../common/configuration';

import style from './Footer.module.scss';

interface IProperty {
  isFixedPosition: boolean;
}

interface IState {
  location: string;
  socialButtons: ISocialButton[];
}

interface ISocialButton {
  id: string;
  href: string;
  icon: string;
}

export default class Footer extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      location: 'Pulong Buhangin, Santa Maria, Bulacan, Philippines.', 
      socialButtons: [
        {
          id: 'github',
          href: 'https://github.com/LordDashMe',
          icon: 'fa-github'
        },
        {
          id: 'linkedin',
          href: 'https://www.linkedin.com/in/joshua-clifford-reyes-5572b912a/',
          icon: 'fa-linkedin'
        },
        {
          id: 'facebook',
          href: 'https://www.facebook.com/LordDash.Me',
          icon: 'fa-facebook-square'
        },
        {
          id: 'twitter',
          href: 'https://twitter.com/lorddashme?lang=en',
          icon: 'fa-twitter'
        },
        {
          id: 'instagram',
          href: 'https://instagram.com/lorddashme/',
          icon: 'fa-instagram'
        }
      ]
    };
  }

  private authorLocation(): JSX.Element {
    return (
      <div className={style['upper-section-wrapper'] + ' col-md-6'}>
        <h3 className={style['upper-section-title']}><i className="fas fa-map-marker-alt" aria-hidden="true"></i> LOCATION</h3>
        <p className={style['location']}>{this.state.location}</p>
      </div>
    );
  }

  private socialButtonsList(): JSX.Element {
    return (
      <div className={style['upper-section-wrapper'] + ' col-md-6'}>
        <h3 className={style['upper-section-title']}><i className="fas fa-share-square" aria-hidden="true"></i> LOOK FOR ME IN THE WEB</h3>
        <ul className="list-inline">
          {this.getSocialButtons()}
        </ul>
      </div>
    );
  }

  private getSocialButtons(): JSX.Element[] {
    
    return this.state.socialButtons.map(socialButton => {
      
      const href: string = socialButton.href;
      const icon: string = 'fab ' + socialButton.icon;
      
      return (
        <li key={socialButton.id}>
          <div className={style['button-social']} onClick={this.onSocialButtonClick.bind(this, href)}>
            <i className={icon}></i>
          </div>
        </li>
      );
    });
  }

  private onSocialButtonClick(href: string): void {
    window.open(href, '_blank');
  }

  private copyright(): JSX.Element {
    return (
      <div className={style['copyright']}>
        <p>&copy; 2020 <a href="/" rel="noopener noreferrer">LordDashMe</a> v{COMMON_CONFIGURATION.buildVersion}</p>
        <p>Made with <i className="fas fa-heart" aria-hidden="true"></i></p>
        <p>Powered by <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>, <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">Gatsby</a>, and <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages</a>.</p>
        <p>Something's happen? check <a href="/status/" rel="noopener noreferrer">Status</a>.</p>
      </div>
    );
  }

  private upperPart(): JSX.Element {
    return (
      <div className="container">
        <div className="row">
          {this.authorLocation()}
          {this.socialButtonsList()}
        </div>
      </div>
    );
  }

  private lowerPart(): JSX.Element {
    return (
      <div className="container">
        <div className="row">
          {this.copyright()}
        </div>
      </div>
    );
  }

  public render(): JSX.Element {

    let container: string = style['container'];

    if (this.props.isFixedPosition) {
      container += ' ' + style['fixed-position'];
    }

    return (
      <footer id="footer-component" className={container}>
        {this.upperPart()}
        {this.lowerPart()}
      </footer>
    );
  }
}
