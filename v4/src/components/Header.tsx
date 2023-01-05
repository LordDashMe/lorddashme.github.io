import { Link } from 'gatsby';
import React, { Component } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import DarkModeButton from './DarkModeButton';

import * as styles from './Header.module.scss';

export default class NavigationBar extends Component {

  public render(): JSX.Element {

    return (
      <header>
        <div className="container container-padding">
          <div className={styles.innerHeader}>
            <Link to="/">
              <StaticImage 
                src="../images/my-logo.svg"
                loading="eager"
                width={38}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                placeholder="none"
                backgroundColor={'transparent'}
                alt="Dash"
                title="Dash"
              />
            </Link>
            <div className={styles.navigation}>
              <Link to="/#about-me">About Me</Link>
              <DarkModeButton />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
