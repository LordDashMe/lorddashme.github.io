import React, { Component, MouseEventHandler } from 'react';

import * as styles from './DarkModeButton.module.scss';

declare global {

  interface Window {
    __themeConstant: any;
    __theme: any;
    __setTheme: Function;
  }
};

interface DarkModeButtonState {
  isDarkMode: boolean;
}

export default class DarkModeButton extends Component<{}, DarkModeButtonState> {

  public constructor(props: any) {
    
    super(props);

    this.state = {
      isDarkMode: (window.__theme === 'light' ? false : true)
    };
  }

  private onClick(): void {

    let isDarkMode = false;
    let theme = window.__themeConstant.LIGHT;

    if (! this.state.isDarkMode) {
      isDarkMode = true;
      theme = window.__themeConstant.DARK;
    }

    this.setState({ isDarkMode: isDarkMode });
    window.__setTheme(theme);
  }

  public render(): JSX.Element {
    
    return (
      <div className={styles.container} onClick={this.onClick.bind(this)}>
        <i className={'fas ' + (this.state.isDarkMode ? styles.faSun : styles.faMoon)}></i>
      </div>
    );
  }
}
