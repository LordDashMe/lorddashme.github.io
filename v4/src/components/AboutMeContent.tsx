import React, { Component } from "react"

import * as styles from "./AboutMeContent.module.scss"

export default class AboutMeContent extends Component {
  public render(): JSX.Element {
    return (
      <div className={styles.container}>
        <h2 id="about-me">About Me</h2>
        <p>
          Hello, I'm Joshua Clifford "Dash" Reyes, with over 10 years of
          experience in the tech industry. Throughout my career, I've had the
          privilege to contribute to the open source community through various
          projects, many of which I continue to support and maintain. My
          approach to development is flexible; I value design patterns and best
          practices for their structure, yet I'm equally inclined to prioritize
          simplicity and directness in my projects, aiming for code that's
          straightforward and maintainable.
        </p>
        <p>
          Beyond coding, I have a passion for gaming. Role-playing games (RPGs),
          chess, and strategy games are my go-to genres. I'm particularly fond
          of the Nintendo Switch for its versatility, being able to switch from
          handheld to tabletop to TV mode is a game-changer for me. The
          innovation it represents has me eagerly anticipating what the future
          holds for gaming technology.
        </p>
        <p>
          My enthusiasm for coding, continuous learning, and problem-solving is
          boundless. It's hard to picture a time when these activities won't be
          part of my daily life.
        </p>
      </div>
    )
  }
}
