import React, { Component } from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./AboutMeImage.module.scss"

export default class AboutMeImage extends Component {
  public render(): JSX.Element {
    return (
      <div className={styles.container}>
        <StaticImage
          src="../images/dash-in-shirakawa.jpg"
          loading="lazy"
          width={350}
          quality={100}
          formats={["auto", "webp"]}
          placeholder="none"
          backgroundColor={"transparent"}
          alt="Dash in Shirakawa"
          title="Dash in Shirakawa"
        />
      </div>
    )
  }
}
