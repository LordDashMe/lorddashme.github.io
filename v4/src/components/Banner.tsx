import React, { Component } from 'react';

import * as styles from './Banner.module.scss';

interface BannerProps {
  children?: any;
}

export default class Banner extends Component<BannerProps> {

  public render(): JSX.Element {
    
    return (
      <div className={styles.banner}>
        <div className="container container-padding">
          <div className={styles.innerBanner}>
            <div className={styles.content}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
