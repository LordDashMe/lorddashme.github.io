import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ISiteMetaData from '../interfaces/ISiteMetaData';

interface ISEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

interface ISEOState {}

export class SEO extends React.Component<ISEOProps, ISEOState> {

  private siteMetaData: ISiteMetaData;

  public setSiteMetaData(siteMetaData: ISiteMetaData): SEO {
    
    this.siteMetaData = siteMetaData;

    return this;
  }

  public render(): JSX.Element {

    const canonical: string = this.siteMetaData.siteUrl + (this.props.canonical ? this.props.canonical.replace(/^(\/)/g, '') : '');

    return (
      <React.Fragment>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        {typeof this.props.canonical !== 'undefined' && this.props.canonical ? <link rel='canonical' href={canonical} /> : ''}

        <meta property="og:title" content={this.props.title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={this.props.description} />
        <meta property="og:type" content="website" />
        {typeof this.props.image !== 'undefined' && this.props.image ? <meta property="og:image" content={this.props.image} /> : ''}
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="Joshua Clifford Reyes" />
      
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={this.siteMetaData.author || ''} />
        <meta name="twitter:title" content={this.props.title} />
        <meta name="twitter:description" content={this.props.description} />

        <meta name="theme-color" content="#000" />
      </React.Fragment>
    );
  }
}

export default (props: ISEOProps): JSX.Element => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  return (new SEO(props))
    .setSiteMetaData(site.siteMetadata)
    .render();
};
