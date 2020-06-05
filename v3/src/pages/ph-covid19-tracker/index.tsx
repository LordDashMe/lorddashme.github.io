import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate, lazyLoadBottomPageTrigger } from '../../common/helper';
import IApplicationLdJSON from '../../common/Contract/IApplicationLdJSON';

import GoogleFonts from '../../styles/GoogleFonts';
import Global from '../../styles/Microsites/COVID19/Global';

import LazyLoadBlock from '../../components/LazyLoadBlock/LazyLoadBlock';
import PageLayout from '../../components/PageLayout/PageLayout';
import PageTitle from '../../components/PageTitle/PageTitle';
import StatusPieChart from '../../components/Microsites/COVID19/StatusOverview/Chart/StatusPieChart';
import StatusOverview from '../../components/Microsites/COVID19/StatusOverview/StatusOverview';

const About = loadable(() => import('../../components/Microsites/COVID19/About/About'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-about-component`) });
const SuggestedVideo = loadable(() => import('../../components/Microsites/COVID19/SuggestedVideo/SuggestedVideo'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-suggested-video-component`) });
const Footer = loadable(() => import('../../components/Microsites/COVID19/Footer/Footer'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-footer-component`) });

const Youtube = loadable(() => import('../../components/VideoPlayer/Youtube/Youtube'), { fallback: null });
const TwitterWidget = loadable(() => import('../../components/SocialMedia/Twitter/TwitterWidget'), { fallback: null });
const FacebookSDK = loadable(() => import('../../components/SocialMedia/Facebook/FacebookSDK'), { fallback: null });
const Ads = loadable(() => import('../../components/Ads/Ads'), { fallback: loadableFallbackTemplate(`#ads-component`) });
const GoogleAdsense = loadable(() => import('../../components/Ads/GoogleAdsense/GoogleAdsense'), { fallback: null });
const GoogleAdsenseResponsiveAds = loadable(() => import('../../components/Ads/GoogleAdsense/GoogleAdsenseResponsiveAds'), { fallback: loadableFallbackTemplate(`#ads-google-adsense-responsive-ads-component`) });
const GoogleAnalytics = loadable(() => import('../../components/Analytics/GoogleAnalytics/GoogleAnalytics'), { fallback: null });

const PHCovid19Tracker = (): JSX.Element => {

  const pageTitle: string = 'COVID-19 Cases in the Philippines';
  
  let currentLocationURL: string = '/ph-covid19-tracker';

  const [lazyLoadBlocks, setLazyLoadBlocks] = useState({
    isDone: false,
    items: [false, false, false]
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
    "author": "Joshua Clifford Reyes",
    "image": "/resources/img/thumbnails/covid19-min.jpg",
    "description": "A tracking page for COVID-19 cases in the Philippines."
  };
  
  return (
    <React.Fragment>

      <Helmet defer={false}>
        <html lang="en" />

        <title>{pageTitle}</title>

        <link rel="shortcut icon" href="/resources/img/icons/favicon-ph-covid19-tracker-2.png" />
        <link rel="apple-touch-icon" href="/resources/img/icons/favicon-ph-covid19-tracker-2.png" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content="Joshua Clifford Reyes" />
        <meta name="description" content="A tracking page for COVID-19 cases in the Philippines." />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@lorddashme" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="A tracking page for COVID-19 cases in the Philippines." />
        <meta name="twitter:creator" content="@lorddashme" />
        <meta name="twitter:image" content="/resources/img/thumbnails/covid19-min.jpg" />
        <meta name="twitter:image:alt" content="COVID19" />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content="/resources/img/thumbnails/covid19-min.jpg" />
        <meta name="og:description" content="A tracking page for COVID-19 cases in the Philippines." />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>
      </Helmet>

      <GoogleFonts />
      <Global />

      <PageLayout>
        
        <LazyLoadBlock id="critical1-0" visibilityFlag={true}>
          <PageTitle content={'COVID-19 CASES IN THE PHILIPPINES'} />
          <StatusPieChart />
          <StatusOverview />
        </LazyLoadBlock>
        
        <LazyLoadBlock id="item1-0" visibilityFlag={lazyLoadBlocks.items[0]}>
          <About />
          {/* Line Item: LordDashMe_Horizontal_Home */}
          <Ads appearance="horizontal">
            <GoogleAdsenseResponsiveAds 
              adClient={'ca-pub-3427694918014398'}
              adSlot={'4220072227'}/>
          </Ads>
        </LazyLoadBlock>

        <LazyLoadBlock id="item2-0" visibilityFlag={lazyLoadBlocks.items[1]}>
          <SuggestedVideo />
          {/* Line Item: LordDashMe_Horizontal_Home_2 */}
          <Ads appearance="horizontal">
            <GoogleAdsenseResponsiveAds 
              adClient={'ca-pub-3427694918014398'}
              adSlot={'2369194966'} />
          </Ads>
        </LazyLoadBlock>

        <LazyLoadBlock id="item3-0" visibilityFlag={lazyLoadBlocks.items[2]}>
          <Footer />
        </LazyLoadBlock>

      </PageLayout>

      <LazyLoadBlock id="item1-1" visibilityFlag={lazyLoadBlocks.items[0]}>
        <GoogleAdsense />
        <TwitterWidget />
        <FacebookSDK />
      </LazyLoadBlock>
      
      <LazyLoadBlock id="item2-1" visibilityFlag={lazyLoadBlocks.items[1]}>
        <Youtube />
      </LazyLoadBlock>
      
      <LazyLoadBlock id="critical1-1" visibilityFlag={true}>
        <GoogleAnalytics trackingId={'UA-128894279-1'} />
      </LazyLoadBlock>

    </React.Fragment>
  );
}

export default PHCovid19Tracker;
