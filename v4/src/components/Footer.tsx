import React, { Component } from 'react';

import * as styles from './Footer.module.scss';

export default class Footer extends Component {

  public render(): JSX.Element {
    
    return (
      <footer>
        <div className="container container-padding">
          <div className={styles.innerFooter}>
            <div className={styles.content}>Cheers! 🍻</div> 
          </div>
        </div>
      </footer>
    );
  }
}
