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
  isDarkMode: boolean | null;
}

export default class DarkModeButton extends Component<{}, DarkModeButtonState> {

  public constructor(props: any) {

    super(props);

    this.state = {
      isDarkMode: null
    };
  }

  public componentDidMount(): void {

    if (typeof window !== 'undefined' && window.__theme !== 'undefined') {
      
      let isDarkMode: boolean = false;

      if (window.__theme === window.__themeConstant.DARK) {
        isDarkMode = true;
      }

      this.setState({ isDarkMode: isDarkMode });
    }
  }

  private onClick(): void {
    
    let isDarkMode = false;
    let theme = window.__themeConstant.LIGHT;

    if (this.state.isDarkMode === false) {
      isDarkMode = true;
      theme = window.__themeConstant.DARK;
    }

    window.__setTheme(theme);
    this.setState({ isDarkMode: isDarkMode });
  }

  public render(): JSX.Element {

    let content: JSX.Element = <React.Fragment></React.Fragment>;

    if (typeof this.state.isDarkMode === 'boolean') {
      content = <i className={'fas ' + (this.state.isDarkMode ? styles.faSun : styles.faMoon)}></i>;
    }

    return (
      <div className={styles.container} onClick={this.onClick.bind(this)}>{content}</div>
    );
  }
}
