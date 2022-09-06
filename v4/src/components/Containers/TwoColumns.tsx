import React, { Component } from 'react';

import '../../styles/background-skew.scss';

import * as styles from './TwoColumns.module.scss';

interface TwoColumnsProps {
  children?: any;
}

export default class TwoColumns extends Component<TwoColumnsProps> {

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
