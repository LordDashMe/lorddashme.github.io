import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate, lazyLoadBottomPageTrigger } from '../common/helper';
import page_meta from '../common/page_meta';
import IApplicationLdJSON from '../common/Contract/IApplicationLdJSON';

import Bootstrap from '../components/Styled/Boostrap';
import Global from '../components/Styled/Global';
import GoogleFontsMontserrat from '../components/Styled/GoogleFontsMontserrat';
import FontAwesomeGlobal from '../components/Styled/FontAwesomeGlobal';
import FontAwesomeNavigationBar from '../components/Styled/FontAwesomeNavigationBar';
import FontAwesomeFooter from '../components/Styled/FontAwesomeFooter';
import FontAwesomeSkillTechnology from '../components/Styled/FontAwesomeSkillTechnology';

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
const GoogleGlobalSiteTag = loadable(() => import('../components/Analytics/GoogleGlobalSiteTag/GoogleGlobalSiteTag'), { fallback: null });

const Home = (): JSX.Element => {

  const pageTitle: string = page_meta.title.main;
  
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
    "author": page_meta.author,
    "image": page_meta.image.src,
    "description": page_meta.description
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
        <meta name="description" content={page_meta.description} />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={page_meta.twitter.site} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={page_meta.description} />
        <meta name="twitter:creator" content={page_meta.twitter.creator} />
        <meta name="twitter:image" content={page_meta.image.src} />
        <meta name="twitter:image:alt" content={page_meta.image.alt} />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content={page_meta.image.src} />
        <meta name="og:description" content={page_meta.description} />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>

        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/resources/img/author/profile-tianzifang-min-super.jpg" crossOrigin="anonymous" />
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
        <GoogleGlobalSiteTag trackingId={'UA-128894279-1'} />
      </LazyLoadBlock>

    </React.Fragment>
  );
}

export default Home;
