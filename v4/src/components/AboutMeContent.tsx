import React, { Component } from "react"

import * as styles from "./AboutMeContent.module.scss"

export default class AboutMeContent extends Component {
  public render(): JSX.Element {
    return (
      <div className={styles.container}>
        <h2 id="about-me">About Me</h2>
        <p>
          Hi, I'm Joshua Clifford "Dash" Reyes, a software engineer with over 10
          years of hands-on experience building scalable, real-world
          applications across mobile, web, cloud, and eCommerce platforms. I
          started my journey in the early 2010s, coding Android apps on
          underpowered laptops (back when every compile felt like a coffee
          break). Since then, I've grown into backend systems, cloud
          infrastructure, and full-stack development using technologies like
          AWS, GCP, and Shopify.
        </p>
        <p>
          Over the years, I've had the opportunity to lead development teams,
          helping others grow while pushing projects forward with clean,
          maintainable code and thoughtful engineering decisions. I value design
          patterns and best practices for their structure, yet I'm equally
          inclined to prioritize simplicity and directness, aiming for solutions
          that are efficient, clear, and built to last.
        </p>
        <p>
          I actively contribute to the open source community and continue to
          sharpen my skills through collaboration and shared learning. Outside
          the keyboard, I enjoy chess and strategy games, as they reflect the
          same mindset I bring to problem-solving in tech: plan smart, adapt
          fast, and play the long game.
        </p>
      </div>
    )
  }
}
