module.exports = {
  siteMetadata: {
    title: `Joshua Clifford Reyes`,
    description: `I'm a Fullstack Developer and Open Source Contributor. Promoting Clean Code, Test-Driven Development, Design Patterns, and Best Practices.`,
    author: {
      name: `Joshua Clifford Reyes`,
      twitterUsername: `@lorddashme`,
    },
    site: {
      name: `Joshua Clifford Reyes`,
      url: `https://lorddashme.github.io/`,
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/my-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    
    // ======================== User Added Plugins ========================
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          // This is allowed in Typekit Webfontloader: https://github.com/typekit/webfontloader/issues/430#issuecomment-627441012
          api: 'https://fonts.googleapis.com/css2',
          families: ['Poppins:wght@400;500;600;700;800;900&display=swap']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'UA-128894279-1'
        ],
        pluginConfig: {
          head: false
        }
      }
    }
    // ======================== User Added Plugins ========================
  ],
}
