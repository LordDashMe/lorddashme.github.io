import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate, lazyLoadBottomPageTrigger } from '../common/helper';
import COMMON_PAGE_META from '../common/page_meta';
import IApplicationLdJSON from '../common/Contract/IApplicationLdJSON';

import Bootstrap from '../styles/Boostrap';
import Global from '../styles/Global';
import GoogleFontsMontserrat from '../styles/GoogleFontsMontserrat';
import FontAwesomeGlobal from '../styles/FontAwesomeGlobal';
import FontAwesomeNavigationBar from '../styles/FontAwesomeNavigationBar';
import FontAwesomeFooter from '../styles/FontAwesomeFooter';
import FontAwesomeSkillTechnology from '../styles/FontAwesomeSkillTechnology';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import PageLayout from '../components/PageLayout/PageLayout';
import Section from '../components/Section/Section';
import Author from '../components/Author/Author';
import LazyLoadBlock from '../components/LazyLoadBlock/LazyLoadBlock';

const Headline = loadable(() => import('../components/Headline/Headline'), { fallback: loadableFallbackTemplate(`#headline-component`) });
const StatusPieChart = loadable(() => import('../components/SkillTechnology/Chart/StatusPieChart'), { fallback: loadableFallbackTemplate(`#skill-technology-chart-status-pie-chart-component`) });
const SkillTechnology = loadable(() => import('../components/SkillTechnology/SkillTechnology'), { fallback: loadableFallbackTemplate(`#skill-technology`) });
const Statement = loadable(() => import('../components/Statement/Statement'), { fallback: loadableFallbackTemplate(`#statement-component`) });
const Footer = loadable(() => import('../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });

const Ads = loadable(() => import('../components/Ads/Ads'), { fallback: loadableFallbackTemplate(`#ads-component`) });
const GoogleAdsense = loadable(() => import('../components/Ads/GoogleAdsense/GoogleAdsense'), { fallback: null });
const GoogleAdsenseResponsiveAds = loadable(() => import('../components/Ads/GoogleAdsense/GoogleAdsenseResponsiveAds'), { fallback: loadableFallbackTemplate(`#ads-google-adsense-responsive-ads-component`) });
const GoogleAnalytics = loadable(() => import('../components/Analytics/GoogleAnalytics/GoogleAnalytics'), { fallback: null });

const Home = (): JSX.Element => {

  const pageTitle: string = COMMON_PAGE_META.title.main;
  
  let currentLocationURL: string = '/';

  const [lazyLoadBlocks, setLazyLoadBlocks] = useState({
    isDone: false,
    items: [false, false]
  });

  useEffect(() => {

    currentLocationURL = document.location.href;

    const lazyloadTrigger = lazyLoadBottomPageTrigger(lazyLoadBlocks, (state: any) => {
      setLazyLoadBlocks(state);
    });

    return () => { lazyloadTrigger.unsubscribe(); };

  }, [lazyLoadBlocks]);

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
        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Helmet>

      <Bootstrap />
      <Global />
      <GoogleFontsMontserrat />
      <FontAwesomeGlobal />
      <FontAwesomeNavigationBar />
      <FontAwesomeFooter />
      <FontAwesomeSkillTechnology />

      <LazyLoadBlock id="critical1-0" visibilityFlag={true}>
        <NavigationBar />
      </LazyLoadBlock>

      <LazyLoadBlock id="item1-0" visibilityFlag={lazyLoadBlocks.items[0]}>
        <Headline />
      </LazyLoadBlock>

      <PageLayout>
      
        <LazyLoadBlock id="critical1-1" visibilityFlag={true}>
          <Section 
            id="author" 
            title="HELLO, WORLD!" 
            showThematicBreak={true} 
            showBorderTop={true}>
            <Author />
          </Section>
        </LazyLoadBlock>
        
        <LazyLoadBlock id="item1-1" visibilityFlag={lazyLoadBlocks.items[0]}>
          <Section 
            id="skills-technologies" 
            title="SKILLS | TECHNOLOGIES" 
            showThematicBreak={true} 
            showBorderTop={true}>
            <StatusPieChart />
            <SkillTechnology />
          </Section>
        </LazyLoadBlock>

        <LazyLoadBlock id="item2-0" visibilityFlag={lazyLoadBlocks.items[1]}>
          <Section 
            id="section-skip-1" 
            title="" 
            showThematicBreak={false} 
            showBorderTop={true}>
            {/* Line Item: LordDashMe_Horizontal_Home */}
            <Ads appearance="horizontal">
              <GoogleAdsenseResponsiveAds 
                adClient={'ca-pub-3427694918014398'}
                adSlot={'4220072227'} />
            </Ads>
            <Statement />
          </Section>
        </LazyLoadBlock>
        
      </PageLayout>

      <LazyLoadBlock id="item2-1" visibilityFlag={lazyLoadBlocks.items[1]}>
        <Footer isFixedPosition={false}/>
        <GoogleAdsense />
      </LazyLoadBlock>

      <LazyLoadBlock id="critical1-2" visibilityFlag={true}>
        <GoogleAnalytics trackingId={'UA-128894279-1'} />
      </LazyLoadBlock>

    </React.Fragment>
  );
}

export default Home;
