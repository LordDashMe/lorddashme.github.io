import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import page_meta from '../../common/page_meta';
import IApplicationLdJSON from '../../common/Contract/IApplicationLdJSON';

import GoogleFontsNunito from '../../components/Styled/GoogleFontsNunito';
import FontAwesomeGlobal from '../../components/Styled/FontAwesomeGlobal';

import Global from '../../components/Styled/Microsites/Status/Global';
import FontAwesomeService from '../../components/Styled/Microsites/Status/FontAwesomeService';
import ImageBackgroundScene from '../../components/Styled/Microsites/Status/ImageBackgroundScene';

import PageLayout from '../../components/PageLayout/PageLayout';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageDescription from '../../components/PageDescription/PageDescription';

import ServicesWrapper from '../../components/Microsites/Status/ServicesWrapper/ServicesWrapper';
import Service from '../../components/Microsites/Status/Service/Service';

const GoogleGlobalSiteTag = loadable(() => import('../../components/Analytics/GoogleGlobalSiteTag/GoogleGlobalSiteTag'), { fallback: null });

const Status = (): JSX.Element => {

  const pageTitle: string = 'Status';
  
  let currentLocationURL: string = '/status';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson: IApplicationLdJSON = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL,
    "name": pageTitle,
    "author": page_meta.author,
    "image": page_meta.image.src,
    "description": "Welcome to the website monitoring page for the services that are currently in used."
  };
  
  return (
    <React.Fragment>

      <Helmet defer={false}>
        <html lang="en" />

        <title>{pageTitle}</title>

        <link rel="shortcut icon" href={page_meta.favicon} />  
        <link rel="apple-touch-icon" href={page_meta.favicon} />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content={page_meta.author} />
        <meta name="description" content="Welcome to the website monitoring page for the services that are currently in used." />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={page_meta.twitter.site} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="Welcome to the website monitoring page for the services that are currently in used." />
        <meta name="twitter:creator" content={page_meta.twitter.creator} />
        <meta name="twitter:image" content={page_meta.image.src} />
        <meta name="twitter:image:alt" content={page_meta.image.alt} />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content={page_meta.image.src} />
        <meta name="og:description" content="Welcome to the website monitoring page for the services that are currently in used." />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>

        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/resources/img/microsites/status/status-scene.svg" crossOrigin="anonymous" />
      </Helmet>

      <GoogleFontsNunito />
      <FontAwesomeGlobal />
      <Global />
      <FontAwesomeService />

      <PageLayout>

        <PageTitle 
          content={'WEBSITE CURRENT STATUS'}
          color={'#183153'} />

        <PageDescription 
          content={'Vigilance! Check this page any time you notice a problem with the site.'} 
          color={'#183153'} />

        <ServicesWrapper>
          <Service 
            name={'Node.js Service'} 
            features={[
              {
                name: 'Contact API',
                status: 'Online'
              },
              {
                name: 'CSS Minifier API',
                status: 'Offline'
              }
            ]}
          />
          <Service 
            name={'PHP Service'} 
            features={[
              {
                name: 'Strong Password Generator API',
                status: 'Online'
              },
              {
                name: 'Content Hiding API',
                status: 'Offline'
              },
              {
                name: 'Content Hashing API',
                status: 'Offline'
              }
            ]}
          />
          <Service 
            name={'Google Firebase - Cloud Firestore Service'} 
            features={[
              {
                name: 'Projects API',
                status: 'Online'
              },
              {
                name: 'Headline API',
                status: 'Online'
              },
              {
                name: 'Microsites API',
                status: 'Online'
              }
            ]}
          />
        </ServicesWrapper>

        <ImageBackgroundScene 
          src={'/resources/img/microsites/status/status-scene.svg'}
          alt={'Status Scene Left'}
          theme={{ left: '0', top: '0' }} />

        <ImageBackgroundScene 
          src={'/resources/img/microsites/status/status-scene.svg'}
          alt={'Status Scene Right'}
          theme={{ right: '0', bottom: '-150px' }} />

      </PageLayout>

      <GoogleGlobalSiteTag trackingId={'UA-128894279-1'} />

    </React.Fragment>
  );
}

export default Status;
