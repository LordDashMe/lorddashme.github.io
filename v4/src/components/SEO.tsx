import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title?: string;
  description?: string;
  author?: string;
  authorTwitter?: string;
  siteName?: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
}

interface SiteMetaDataAuthor {
  name: string;
  twitterUsername: string;
}

interface SiteMetaDataSite {
  name: string;
  url: string;
}

interface SiteMetaData {
  title: string;
  description: string;
  author: SiteMetaDataAuthor;
  site: SiteMetaDataSite;
}

class SEO extends Component<SEOProps> {

  private siteMetaData: SiteMetaData;

  public setSiteMetaData(siteMetaData: SiteMetaData): SEO {

    this.siteMetaData = siteMetaData;

    return this;
  }

  public render(): JSX.Element {

    let title: string = this.siteMetaData.title;
    let description: string = this.siteMetaData.description;
    let canonical: string = '';
    let image: string = '';
    let imageAlt: string = '';
    let authorTwitter: string = this.siteMetaData.author.twitterUsername;
    let siteName: string = this.siteMetaData.site.name;

    if (typeof this.props.title !== 'undefined' && this.props.title) {
      title = this.props.title;
    }

    if (typeof this.props.description !== 'undefined' && this.props.description) {
      description = this.props.description;
    }

    if (typeof this.props.canonical !== 'undefined' && this.props.canonical) {
      canonical = this.siteMetaData.site.url + (this.props.canonical ? this.props.canonical.replace(/^(\/)/g, '') : '');
    }

    if (typeof this.props.image !== 'undefined' && this.props.image) {
      image = this.siteMetaData.site.url + this.props.image;
    }

    if (typeof this.props.imageAlt !== 'undefined' && this.props.imageAlt) {
      imageAlt = this.props.imageAlt;
    }

    if (typeof this.props.authorTwitter !== 'undefined' && this.props.authorTwitter) {
      authorTwitter = this.props.authorTwitter;
    }

    if (typeof this.props.siteName !== 'undefined' && this.props.siteName) {
      siteName = this.props.siteName;
    }

    const structuredData: object = {
      "@context": "https://schema.org",
      "@type": "website",
      "url": canonical,
      "name": title,
      "description": description,
      "image": image
    };

    return (
      <React.Fragment>
        {/* PAGE INFORMATION */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical ? <link rel="canonical" href={canonical} /> : ''}
        {/* OPEN-GRAPH META DETAILS */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        {image ? <meta property="og:image" content={image} /> : ''}
        {/* TWITTER META DETAILS */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={authorTwitter} />
        <meta name="twitter:creator" content={authorTwitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image ? <meta name="twitter:image" content={image} /> : ''}
        {imageAlt ? <meta name="twitter:image:alt" content={imageAlt} /> : ''}
        {/* DATA STRUCTURE - APPLICATION JSON+LD */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </React.Fragment>
    );
  }
}

export default (props: SEOProps): JSX.Element => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
              twitterUsername
            }
            site {
              name
              url
            }
          }
        }
      }
    `
  );

  return (new SEO(props))
    .setSiteMetaData(site.siteMetadata)
    .render();
};
