import { Link } from 'gatsby';
import React, { Component } from 'react';

import * as styles from './SocialMediaButtons.module.scss';

export default class SocialMediaButtons extends Component {

  public render(): JSX.Element {
    
    return (
      <div className={styles.container}>
        <Link to="https://github.com/LordDashMe" target="_blank">
          <div>Github</div>
          <i className={'fab ' + styles.faGithub}></i>
        </Link>
        <Link to="https://twitter.com/lorddashme" target="_blank">
          <div>Twitter</div>
          <i className={'fab ' + styles.faTwitter}></i>
        </Link>
        <Link to="https://www.linkedin.com/in/joshua-clifford-reyes-5572b912a/" target="_blank">
          <div>Linkedin</div>
          <i className={'fab ' + styles.faLinkedin}></i>
        </Link>
      </div>
    );
  }
}
