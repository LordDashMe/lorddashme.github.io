import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../../common/helper';

const PageInformation = loadable(() => import('../../components/PageInformation/PageInformation'), { fallback: loadableFallbackTemplate(`#page-information-component`) });

import '../../common/global.scss';
import './index.scss';

const NotFound = (): JSX.Element => {

  const pageTitle = 'Page Not Found';
  
  let currentLocationURL = '/notfound';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL,
    "name": pageTitle,
    "author": "Joshua Clifford Reyes",
    "image": "/resources/img/profile-tianzifang-min-super.jpg",
    "description": "Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia"
  };

  return (
    <React.Fragment>
      
      <Helmet>
        <html lang="en" />

        <title>{pageTitle}</title>

        <link rel="shortcut icon" href="/resources/img/favicon.png" />  
        <link rel="apple-touch-icon" href="/resources/img/favicon.png" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content="Joshua Clifford Reyes" />
        <meta name="description" content="Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia" />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@lorddashme" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia" />
        <meta name="twitter:creator" content="@lorddashme" />
        <meta name="twitter:image" content="/resources/img/profile-tianzifang-min-super.jpg" />
        <meta name="twitter:image:alt" content="Profile Tianzifang" />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content="/resources/img/profile-tianzifang-min-super.jpg" />
        <meta name="og:description" content="Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia" />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>
      </Helmet>

      <PageInformation id="not-found" 
                       title="PAGE NOT FOUND"
                       primaryIcon="fas fa-map-marked-alt" 
                       description="Hmm. Looks like the page you're trying to visit is not available. Maybe check the address again."/>
    </React.Fragment>
  );
}

export default NotFound;

