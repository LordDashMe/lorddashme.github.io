import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../../common/helper';
import WEBSITE_PAGE_META from '../../common/Website/page_meta';
import IApplicationLdJSON from '../../common/Contract/IApplicationLdJSON';

const Bootstrap = loadable(() => import('../../components/Global/Bootstrap'), { fallback: null });
const GoogleFonts = loadable(() => import('../../components/Global/GoogleFonts'), { fallback: null });
const FontAwesomeGlobal = loadable(() => import('../../components/Global/FontAwesomeGlobal'), { fallback: null });
const FontAwesomeNavigationBar = loadable(() => import('../../components/Global/FontAwesomeNavigationBar'), { fallback: null });
const FontAwesomeFooter = loadable(() => import('../../components/Global/FontAwesomeFooter'), { fallback: null });
const Section = loadable(() => import('../../components/Section/Section'), { fallback: null });

const NavigationBar = loadable(() => import('../../components/NavigationBar/NavigationBar'), { fallback: loadableFallbackTemplate(`#navigation-bar-component`) });
const Headline = loadable(() => import('../../components/Headline/Headline'), { fallback: loadableFallbackTemplate(`#headline-component`) });
const PageLayout = loadable(() => import('../../components/PageLayout/PageLayout'), { fallback: loadableFallbackTemplate(`#page-layout-component`) });
const PoweredBy = loadable(() => import('../../components/PoweredBy/PoweredBy'), { fallback: loadableFallbackTemplate(`#powered-by-component`) });
const Footer = loadable(() => import('../../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });
const Tool = loadable(() => import('../../components/Tool/Tool'), { fallback: loadableFallbackTemplate(`#tool-component`) });

const GoogleAnalytics = loadable(() => import('../../components/Analytics/GoogleAnalytics/GoogleAnalytics'), { fallback: null });

const Tools = (): JSX.Element => {

  const pageTitle: string = 'Tools';
  
  let currentLocationURL: string = '/tools';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson: IApplicationLdJSON = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL,
    "name": pageTitle,
    "author": WEBSITE_PAGE_META.author,
    "image": WEBSITE_PAGE_META.image.src,
    "description": WEBSITE_PAGE_META.description
  };
  
  return (
    <React.Fragment>
      
      <Helmet defer={false}>
        <html lang="en" />
        
        <title>{pageTitle}</title>

        <link rel="shortcut icon" href={WEBSITE_PAGE_META.favicon} />  
        <link rel="apple-touch-icon" href={WEBSITE_PAGE_META.favicon} />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content={WEBSITE_PAGE_META.author} />
        <meta name="description" content={WEBSITE_PAGE_META.description} />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={WEBSITE_PAGE_META.twitter.site} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={WEBSITE_PAGE_META.description} />
        <meta name="twitter:creator" content={WEBSITE_PAGE_META.twitter.creator} />
        <meta name="twitter:image" content={WEBSITE_PAGE_META.image.src} />
        <meta name="twitter:image:alt" content={WEBSITE_PAGE_META.image.alt} />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content={WEBSITE_PAGE_META.image.src} />
        <meta name="og:description" content={WEBSITE_PAGE_META.description} />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>

        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Helmet>

      <Bootstrap />
      <GoogleFonts />
      <FontAwesomeGlobal />
      <FontAwesomeNavigationBar />
      <FontAwesomeFooter />

      <NavigationBar />
      <Headline />
      <PageLayout>
        <Section 
          id="tools"
          title="TOOLS"
          showThematicBreak={true}
          showBorderTop={false}>
          <PoweredBy>
            Backend is powered by <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku: Cloud Application Platform</a>
          </PoweredBy>
          <Tool />
        </Section>
      </PageLayout>
      <Footer isFixedPosition={false}/>

      <GoogleAnalytics trackingId={'UA-128894279-1'} />

    </React.Fragment>
  );
}

export default Tools;
