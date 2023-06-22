import React, { Component } from 'react';

import './SocialMediaButtons.scss';

export default class SocialMediaButtons extends Component {

  public render(): JSX.Element {
    
    return (
      <div className="social-media-buttons">
        <a href="https://github.com/LordDashMe" target="_blank">
          <div>Github</div>
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/joshua-clifford-reyes-5572b912a/" target="_blank">
          <div>Linkedin</div>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/lorddashme" target="_blank">
          <div>Twitter</div>
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/lorddashme/" target="_blank">
          <div>Instagram</div>
          <i className="fab fa-instagram-square"></i>
        </a>
      </div>
    );
  }
}
