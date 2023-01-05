import React, { Component } from 'react';

import '../../styles/background-skew.scss';

import * as styles from './TwoColumns.module.scss';

interface TwoColumnsProps {
  children?: any;
  justifyContent?: string;
}

export default class TwoColumns extends Component<TwoColumnsProps> {

  public render(): JSX.Element {
    
    let styleAttr = {};

    if (this.props.justifyContent) {
      styleAttr['justify-content'] = this.props.justifyContent;
    }

    return (
      <div className={styles.container + ' background-skew'}>
        <div className="container container-padding">
          <div className={styles.innerContainer} style={styleAttr}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
