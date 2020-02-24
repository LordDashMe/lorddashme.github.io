/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface IProperty {
  description: string;
}

interface IState {}

class SEO extends Component<IProperty, IState> {

  public defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
  };

  public propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
  };

  public constructor(properties: any) {

    super(properties);

  }

  public render(): any {
    
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `
    );
    
    const metaDescription = this.props.description || site.siteMetadata.description

    return (
      <Helmet>
        <title>Test lang</title>
      </Helmet>
      // <Helmet
      //   htmlAttributes={{
      //     lang,
      //   }}
      //   title={title}
      //   titleTemplate={`%s | ${site.siteMetadata.title}`}
      //   meta={[
      //     {
      //       name: `description`,
      //       content: metaDescription,
      //     },
      //     {
      //       property: `og:title`,
      //       content: title,
      //     },
      //     {
      //       property: `og:description`,
      //       content: metaDescription,
      //     },
      //     {
      //       property: `og:type`,
      //       content: `website`,
      //     },
      //     {
      //       name: `twitter:card`,
      //       content: `summary`,
      //     },
      //     {
      //       name: `twitter:creator`,
      //       content: site.siteMetadata.author,
      //     },
      //     {
      //       name: `twitter:title`,
      //       content: title,
      //     },
      //     {
      //       name: `twitter:description`,
      //       content: metaDescription,
      //     },
      //   ].concat(meta)}
      // />
    );
  }
}

export default SEO;
