import { Link } from 'gatsby';
import React, { Component } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

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
                width={48}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                placeholder="none"
                backgroundColor={'transparent'}
                alt="Dash"
                title="Dash"
              />
            </Link>
            <div className={styles.navigation}>
              <Link to="/#about">About</Link>
              <Link to="/#work">Work</Link>
              <Link to="#">Blog</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
