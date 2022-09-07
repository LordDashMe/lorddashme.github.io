import React, { Component } from 'react';

import * as styles from './OneColumn.module.scss';

interface OneColumnProps {
  children?: any;
}

export default class OneColumn extends Component<OneColumnProps> {

  public render(): JSX.Element {
    
    return (
      <div className={styles.container}>
        <div className="container container-padding">
          {this.props.children}
        </div>
      </div>
    );
  }
}
