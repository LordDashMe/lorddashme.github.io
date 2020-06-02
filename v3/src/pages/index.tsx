import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../common/helper';
import WEBSITE_PAGE_META from '../common/Website/page_meta';
import IApplicationLdJSON from '../common/Contract/IApplicationLdJSON';

const Bootstrap = loadable(() => import('../components/Global/Bootstrap'), { fallback: null });
const GoogleFonts = loadable(() => import('../components/Global/GoogleFonts'), { fallback: null });
const FontAwesomeGlobal = loadable(() => import('../components/Global/FontAwesomeGlobal'), { fallback: null });
const FontAwesomeNavigationBar = loadable(() => import('../components/Global/FontAwesomeNavigationBar'), { fallback: null });
const FontAwesomeFooter = loadable(() => import('../components/Global/FontAwesomeFooter'), { fallback: null });
const FontAwesomeSkillTechnology = loadable(() => import('../components/Global/FontAwesomeSkillTechnology'), { fallback: null });
const Section = loadable(() => import('../components/Section/Section'), { fallback: null });

const NavigationBar = loadable(() => import('../components/NavigationBar/NavigationBar'), { fallback: loadableFallbackTemplate(`#navigation-bar-component`) });
const Headline = loadable(() => import('../components/Headline/Headline'), { fallback: loadableFallbackTemplate(`#headline-component`) });
const PageLayout = loadable(() => import('../components/PageLayout/PageLayout'), { fallback: loadableFallbackTemplate(`#page-layout-component`) });
const Author = loadable(() => import('../components/Author/Author'), { fallback: loadableFallbackTemplate(`#author-component`) });
const StatusPieChart = loadable(() => import('../components/SkillTechnology/Chart/StatusPieChart'), { fallback: loadableFallbackTemplate(`#skill-technology-chart-status-pie-chart-component`) });
const SkillTechnology = loadable(() => import('../components/SkillTechnology/SkillTechnology'), { fallback: loadableFallbackTemplate(`#skill-technology`) });
const Statement = loadable(() => import('../components/Statement/Statement'), { fallback: loadableFallbackTemplate(`#statement-component`) });
const Footer = loadable(() => import('../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });

const Ads = loadable(() => import('../components/Ads/Ads'), { fallback: loadableFallbackTemplate(`#ads-component`) });
const GoogleAdsense = loadable(() => import('../components/Ads/GoogleAdsense/GoogleAdsense'), { fallback: null });
const GoogleAdsenseResponsiveAds = loadable(() => import('../components/Ads/GoogleAdsense/GoogleAdsenseResponsiveAds'), { fallback: loadableFallbackTemplate(`#ads-google-adsense-responsive-ads-component`) });
const GoogleAnalytics = loadable(() => import('../components/Analytics/GoogleAnalytics/GoogleAnalytics'), { fallback: null });

const Home = (): JSX.Element => {

  const pageTitle: string = WEBSITE_PAGE_META.title.main;
  
  let currentLocationURL: string = '/';

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
        <link rel="preload" href="/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Helmet>

      <Bootstrap />
      <GoogleFonts />
      <FontAwesomeGlobal />
      <FontAwesomeNavigationBar />
      <FontAwesomeFooter />
      <FontAwesomeSkillTechnology />

      <NavigationBar />
      <Headline />
      <PageLayout>
        <Section 
          id="author" 
          title="HELLO, WORLD!" 
          showThematicBreak={true} 
          showBorderTop={true}>
          <Author />
        </Section>
        <Section 
          id="skills-technologies" 
          title="SKILLS | TECHNOLOGIES" 
          showThematicBreak={true} 
          showBorderTop={true}>
          <StatusPieChart />
          <SkillTechnology />
        </Section>
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
      </PageLayout>
      <Footer isFixedPosition={false}/>

      <GoogleAdsense />
      <GoogleAnalytics trackingId={'UA-128894279-1'} />

    </React.Fragment>
  );
}

export default Home;
