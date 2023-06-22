import React, { Component } from 'react';

import '../../styles/background-skew.scss';

import * as styles from './TwoColumns.module.scss';

interface TwoColumnsProps {
  children?: any;
  justifyContent?: string;
  alignItems?: string;
}

export default class TwoColumns extends Component<TwoColumnsProps> {

  public render(): JSX.Element {
    
    let styleAttr = {};

    if (this.props.justifyContent) {
      styleAttr['justifyContent'] = this.props.justifyContent;
    }

    if (this.props.alignItems) {
      styleAttr['alignItems'] = this.props.alignItems;
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
