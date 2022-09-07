import React, { Component } from 'react';

import * as styles from './Ads.module.scss';

interface AdsProps {
  children?: any;
}

export default class Ads extends Component<AdsProps> {

  public render(): JSX.Element {
    
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
