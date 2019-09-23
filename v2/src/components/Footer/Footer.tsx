import React, { Component } from 'react';

import style from './Footer.module.scss';

interface IProperty {
  isFixedPosition: boolean;
}

interface IState {
  location: string;
  socialButtons: Array<ISocialButton>;
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
    }
  }

  private authorLocation(): JSX.Element {
    return (
      <div className={style['upper-section-wrapper'] + ' col-md-6'}>
        <h3 className={style['upper-section-title']}><i className="fas fa-map-marker-alt" aria-hidden="true"></i>&nbsp; LOCATION</h3>
        <p className={style['location']}>{this.state.location}</p>
      </div>
    );
  }

  private socialButtonsList(): JSX.Element {
    return (
      <div className={style['upper-section-wrapper'] + ' col-md-6'}>
        <h3 className={style['upper-section-title']}><i className="fas fa-share-square" aria-hidden="true"></i>&nbsp; LOOK FOR ME IN THE WEB</h3>
        <ul className="list-inline">
          {this.getSocialButtons()}
        </ul>
      </div>
    );
  }

  private getSocialButtons(): Array<JSX.Element> {
    return this.state.socialButtons.map(socialButton => {
      
      const href = socialButton.href;
      const icon = 'fab ' + socialButton.icon;
      
      return (
        <li key={socialButton.id}>
          <a target="_blank" href={href} className={style['button-social']} rel="noopener noreferrer">
            <i className={icon}></i>
          </a>
        </li>
      );
    });
  }

  private copyright(): JSX.Element {
    return (
      <div className="col-lg-12">
        <p>
          <small className={style['copyright']}>&copy; 2019</small> <a href="/" rel="noopener noreferrer">LordDashMe</a>
        </p>
        <p>
          <small className={style['copyright']}>Made with <i className="fas fa-heart" aria-hidden="true"></i></small>
          <br/>
          <small className={style['copyright']}>Powered by React and Github Pages</small>
        </p>
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

    let container = style['container'];

    if (this.props.isFixedPosition) {
      container += ' ' + style['fixed-position'];
    }

    return (
      <footer className={container}>
        {this.upperPart()}
        {this.lowerPart()}
      </footer>
    );
  }
}
