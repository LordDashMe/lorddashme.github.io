import React, { Component } from 'react';

import * as styles from './AboutMeContent.module.scss';

export default class AboutMeContent extends Component {

  public render(): JSX.Element {
    
    return (
      <div className={styles.container}>
        <h2 id="about-me">About Me</h2>
        <p>Hi, I'm Joshua Clifford "Dash" Reyes. I've been in the industry for 8 years+ and worked on several projects that contributed to the open source community, and I'm still maintaining some of those projects.</p>
        <p>I'm also a casual gamer. I do like playing chess, any strategy games, or role-playing games when I have free time.</p>
        <p>I love coding and solving problems. I can't even imagine when I will stop doing these things.</p>
      </div>
    );
  }
}
