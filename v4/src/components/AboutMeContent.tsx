import React, { Component } from 'react';

import * as styles from './AboutMeContent.module.scss';

export default class AboutMeContent extends Component {

  public render(): JSX.Element {
    
    return (
      <div className={styles.container}>
        <h2 id="about-me">About Me</h2>
        <p>Hey there! I'm Joshua Clifford "Dash" Reyes. I've been in the industry for 8+ years and worked on several projects that contributed to the open source community, and I'm still maintaining some of those projects. I honestly do like to follow some design patterns and best practices when I'm developing a project, but sometimes I also prefer to keep things as simple as possible, or, as I would say, straight to the point and with a mindset for easy-to-maintain source code.</p>
        <p>I'm also a low-key gamer, and usually I use this kind of hobby to release my stress from something. I do like playing role-playing games (RPGs), chess, or any strategy game. I would say that the Nintendo Switch is the best invention for gamers. Imagine that you can change it from handheld mode to tabletop mode to TV mode! I can't wait for the next big invention that will be the successor to this thing.</p>
        <p>I love coding, exploring new things, and solving problems. I can't even imagine when I will stop doing these things.</p>
      </div>
    );
  }
}
