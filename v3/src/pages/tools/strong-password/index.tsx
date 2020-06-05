import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../../../common/helper';
import COMMON_PAGE_META from '../../../common/page_meta';
import IApplicationLdJSON from '../../../common/Contract/IApplicationLdJSON';

import Bootstrap from '../../../styles/Boostrap';
import Global from '../../../styles/Global';
import GoogleFonts from '../../../styles/GoogleFonts';
import FontAwesomeGlobal from '../../../styles/FontAwesomeGlobal';
import FontAwesomeNavigationBar from '../../../styles/FontAwesomeNavigationBar';
import FontAwesomeFooter from '../../../styles/FontAwesomeFooter';

import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import PageLayout from '../../../components/PageLayout/PageLayout';
import Section from '../../../components/Section/Section';

const Headline = loadable(() => import('../../../components/Headline/Headline'), { fallback: loadableFallbackTemplate(`#headline-component`) });
const Footer = loadable(() => import('../../../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });

const GoogleAnalytics = loadable(() => import('../../../components/Analytics/GoogleAnalytics/GoogleAnalytics'), { fallback: null });

const StrongPasswordForm = loadable(() => import('../../../components/Microsites/Tools/StrongPasswordForm/StrongPasswordForm'), { fallback: loadableFallbackTemplate('#strong-password-form-component') });

const Tools = (): JSX.Element => {

  const pageTitle: string = 'Strong Password';
  
  let currentLocationURL: string = '/tools/strong-password';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson: IApplicationLdJSON = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL,
    "name": pageTitle,
    "author": COMMON_PAGE_META.author,
    "image": COMMON_PAGE_META.image.src,
    "description": COMMON_PAGE_META.description
  };
  
  return (
    <React.Fragment>
      
      <Helmet defer={false}>
        <html lang="en" />
        
        <title>{pageTitle}</title>

        <link rel="shortcut icon" href={COMMON_PAGE_META.favicon} />  
        <link rel="apple-touch-icon" href={COMMON_PAGE_META.favicon} />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content={COMMON_PAGE_META.author} />
        <meta name="description" content={COMMON_PAGE_META.description} />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={COMMON_PAGE_META.twitter.site} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={COMMON_PAGE_META.description} />
        <meta name="twitter:creator" content={COMMON_PAGE_META.twitter.creator} />
        <meta name="twitter:image" content={COMMON_PAGE_META.image.src} />
        <meta name="twitter:image:alt" content={COMMON_PAGE_META.image.alt} />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content={COMMON_PAGE_META.image.src} />
        <meta name="og:description" content={COMMON_PAGE_META.description} />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>

        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Helmet>

      <Bootstrap />
      <Global />
      <GoogleFonts />
      <FontAwesomeGlobal />
      <FontAwesomeNavigationBar />
      <FontAwesomeFooter />

      <NavigationBar />
      <Headline />

      <PageLayout>
        <Section 
          id="strong-password"
          title="STRONG PASSWORD"
          showThematicBreak={false}
          showBorderTop={false}>
          
          <StrongPasswordForm />

        </Section>
      </PageLayout>
      
      <Footer isFixedPosition={false}/>

      <GoogleAnalytics trackingId={'UA-128894279-1'} />

    </React.Fragment>
  );
}

export default Tools;
