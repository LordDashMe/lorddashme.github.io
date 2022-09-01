import React, { Component } from 'react';

import '../styles/background-skew.scss';

import * as styles from './TwoColumnsContentWIthImage.module.scss';

interface TwoColumnsContentWIthImageProps {
  children?: any;
}

export default class TwoColumnsContentWIthImage extends Component<TwoColumnsContentWIthImageProps> {

  public render(): JSX.Element {
    
    return (
      <div className={styles.container + ' background-skew'}>
        <div className="container container-padding">
          <div className={styles.innerContainer}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
