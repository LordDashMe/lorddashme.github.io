import React, { Component } from 'react';

import './Footer.scss';

interface ISocialButton {
  id: string;
  href: string;
  icon: string;
}

export default class Footer extends Component {

  private location: string = 'TDSM, Pulong Buhangin, Sta. Maria, Bulacan, Philippines.';

  private socialButtons: Array<ISocialButton> = [
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
  ];

  private authorLocation(): JSX.Element {
    return (
      <div className="footer-col col-md-6">
        <h3><i className="fas fa-map-marker-alt" aria-hidden="true"></i>&nbsp; LOCATION</h3>
        <p className="custom-small-location-content">{this.location}</p>
      </div>
    );
  }

  private socialButtonsList(): JSX.Element {
    return (
      <div className="footer-col col-md-6">
        <h3><i className="fas fa-share-square" aria-hidden="true"></i>&nbsp; LOOK FOR ME IN THE WEB</h3>
        <ul className="list-inline">
          {
            this.socialButtons.map(socialButton => {
              const href = socialButton.href;
              const icon = 'fab ' + socialButton.icon;
              return (
                <li key={socialButton.id}>
                  <a target="_blank" href={href} className="btn-social btn-outline" rel="noopener noreferrer">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  private copyrights(): JSX.Element {
    return (
      <div className="footer-below">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p><small>&copy; 2019</small> <a href="/" rel="noopener noreferrer">LordDashMe</a></p>
              <p>
                <small>Made with <i className="fas fa-heart" aria-hidden="true"></i></small>
                <br/>
                <small>Powered by React and Github Pages</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public render(): JSX.Element {
    return (
      <div className="Footer">
        <footer>
          <div className="footer-above">
            <div className="container">
              <div className="row">
                {this.authorLocation()}
                {this.socialButtonsList()}
              </div>
            </div>
          </div>
          {this.copyrights()}
        </footer>
      </div>
    );
  }
}
