import { Link } from 'gatsby';
import React, { Component } from 'react';

import './SocialMediaButtons.scss';

export default class SocialMediaButtons extends Component {

  public render(): JSX.Element {
    
    return (
      <div className="social-media-buttons">
        <Link to="https://github.com/LordDashMe" target="_blank">
          <div>Github</div>
          <i className="fab fa-github"></i>
        </Link>
        <Link to="https://twitter.com/lorddashme" target="_blank">
          <div>Twitter</div>
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/joshua-clifford-reyes-5572b912a/" target="_blank">
          <div>Linkedin</div>
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
    );
  }
}
