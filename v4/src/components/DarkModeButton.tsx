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

    let isDarkMode = false;

    if (typeof window !== 'undefined' && window.__theme !== 'undefined') {
      if (window.__theme === window.__themeConstant.DARK) {
        isDarkMode = true;
      }
    }

    this.state = {
      isDarkMode: isDarkMode
    };
  }

  private onClick(): void {

    let isDarkMode = false;
    let theme = window.__themeConstant.LIGHT;

    if (! this.state.isDarkMode) {
      isDarkMode = true;
      theme = window.__themeConstant.DARK;
    }

    window.__setTheme(theme);

    this.setState({ isDarkMode: isDarkMode });
  }

  public render(): JSX.Element {

    return (
      <div className={styles.container} onClick={this.onClick.bind(this)}>
        <i className={'fas ' + (this.state.isDarkMode ? styles.faSun : styles.faMoon)}></i>
      </div>
    );
  }
}
