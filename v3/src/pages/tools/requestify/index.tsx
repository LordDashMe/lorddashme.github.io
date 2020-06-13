import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate, isSSR } from '../../../common/helper';
import page_meta from '../../../common/page_meta';
import IApplicationLdJSON from '../../../common/Contract/IApplicationLdJSON';

import Bootstrap from '../../../components/Styled/Boostrap';
import Global from '../../../components/Styled/Global';
import GoogleFontsMontserrat from '../../../components/Styled/GoogleFontsMontserrat';
import FontAwesomeGlobal from '../../../components/Styled/FontAwesomeGlobal';
import FontAwesomeNavigationBar from '../../../components/Styled/FontAwesomeNavigationBar';
import FontAwesomeNightShiftMode from '../../../components/Styled/FontAwesomeNightShiftMode';
import FontAwesomeFooter from '../../../components/Styled/FontAwesomeFooter';

import LazyLoadBlock from '../../../components/LazyLoadBlock/LazyLoadBlock';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import PageLayout from '../../../components/PageLayout/PageLayout';
import Section from '../../../components/Section/Section';
import FloatingActionButtomThemeMode from '../../../components/FloatingActionButton/ThemeMode';

const Headline = loadable(() => import('../../../components/Headline/Headline'), { fallback: loadableFallbackTemplate(`#headline-component`) });
const Footer = loadable(() => import('../../../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });

const GoogleGlobalSiteTag = loadable(() => import('../../../components/Analytics/GoogleGlobalSiteTag/GoogleGlobalSiteTag'), { fallback: null });

const RequestifyForm = loadable(() => import('../../../components/Microsites/Tools/RequestifyForm/RequestifyForm'), { fallback: loadableFallbackTemplate('#requestify-form-component') });

const Tools = (): JSX.Element => {

  const pageTitle: string = 'Requestify';
  const currentLocationURL: React.MutableRefObject<any> = useRef('/tools/requestify');

  const [theme, setTheme] = useState((!isSSR() ? window.__theme : null));

  useEffect(() => {
    currentLocationURL.current = document.location.href;
  });

  const applicationLdJson: IApplicationLdJSON = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL.current,
    "name": pageTitle,
    "author": page_meta.author,
    "image": page_meta.image.src,
    "description": page_meta.description
  };
  
  return (
    <React.Fragment>
      
      <LazyLoadBlock id="c1" visibilityFlag={true}>

        <Helmet defer={false}>
          <html lang="en" />
          
          <title>{pageTitle}</title>

          <link rel="shortcut icon" href={page_meta.favicon} />  
          <link rel="apple-touch-icon" href={page_meta.favicon} />

          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index" />
          <meta name="author" content={page_meta.author} />
          <meta name="description" content={page_meta.description} />
          <link rel="canonical" href={currentLocationURL.current} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={page_meta.twitter.site} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={page_meta.description} />
          <meta name="twitter:creator" content={page_meta.twitter.creator} />
          <meta name="twitter:image" content={page_meta.image.src} />
          <meta name="twitter:image:alt" content={page_meta.image.alt} />

          <meta name="og:url" content={currentLocationURL.current} />
          <meta name="og:type" content="website" />
          <meta name="og:title" content={pageTitle} />
          <meta name="og:image" content={page_meta.image.src} />
          <meta name="og:description" content={page_meta.description} />

          <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>

          <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Helmet>

        <Bootstrap />
        <Global />
        <GoogleFontsMontserrat />
        <FontAwesomeGlobal />
        <FontAwesomeNavigationBar />
        <FontAwesomeNightShiftMode />
        <FontAwesomeFooter />

      </LazyLoadBlock>

      <LazyLoadBlock id="c2" visibilityFlag={true}>
        <NavigationBar />
        <Headline />
      </LazyLoadBlock>

      <LazyLoadBlock id="c3" visibilityFlag={!theme ? false : true} reRender={theme}>
        <FloatingActionButtomThemeMode theme={theme} onToggle={() => {
          const newTheme = (window.__theme === 'dark' ? 'light' : 'dark');
          window.__setTheme(newTheme);
          setTheme(newTheme);
        }} />
      </LazyLoadBlock>
      
      <LazyLoadBlock id="c4" visibilityFlag={true}>
        <PageLayout>
          <Section 
            id="requestify"
            title="REQUESTIFY"
            showThematicBreak={false}
            showBorderTop={false}>
            <RequestifyForm />
          </Section>
        </PageLayout>
        <Footer isFixedPosition={false}/>
        <GoogleGlobalSiteTag trackingId={'UA-128894279-1'} />
      </LazyLoadBlock>

    </React.Fragment>
  );
}

export default Tools;
