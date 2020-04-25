import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../../common/helper';
import IApplicationLdJSON from '../../common/Contract/IApplicationLdJSON';

import Page from './components/Page/Page';

const GoogleAdsense = loadable(() => import('../../components/Ads/GoogleAdsense/GoogleAdsense'), { fallback: loadableFallbackTemplate(`#ads-google-adsense-component`) });
const Youtube = loadable(() => import('../../components/VideoPlayer/Youtube/Youtube'), { fallback: loadableFallbackTemplate(`#video-player-youtube-component`) });
const TwitterWidget = loadable(() => import('../../components/SocialMedia/Twitter/TwitterWidget'), { fallback: loadableFallbackTemplate(`#social-media-twitter-twitter-widget-component`) });
const FacebookSDK = loadable(() => import('../../components/SocialMedia/Facebook/FacebookSDK'), { fallback: loadableFallbackTemplate(`#social-media-facebook-facebook-sdk-component`) });
const GoogleAnalytics = loadable(() => import('../../components/Analytics/GoogleAnalytics/GoogleAnalytics'), { fallback: loadableFallbackTemplate(`#analytics-google-analytics-component`) });
const PageView = loadable(() => import('../../components/Analytics/GoogleAnalytics/PageView'), { fallback: loadableFallbackTemplate(`#analytics-google-analytics-page-view-component`) });
const Ads = loadable(() => import('../../components/Ads/Ads'), { fallback: loadableFallbackTemplate(`#ads-component`) });
const ResponsiveAds = loadable(() => import('../../components/Ads/GoogleAdsense/ResponsiveAds'), { fallback: loadableFallbackTemplate(`#ads-google-adsense-responsive-ads-component`) });

const MainTitle = loadable(() => import('./components/MainTitle/MainTitle'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-main-title-component`) });
const About = loadable(() => import('./components/About/About'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-about-component`) });
const SuggestedVideo = loadable(() => import('./components/SuggestedVideo/SuggestedVideo'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-suggested-video-component`) });
const StatusPieChart = loadable(() => import('./components/StatusOverview/Chart/StatusPieChart'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-status-overview-chart-status-pie-chart-component`) });
const StatusOverview = loadable(() => import('./components/StatusOverview/StatusOverview'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-status-overview-component`) });
const Footer = loadable(() => import('./components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-footer-component`) });

const PHCovid19Tracker = (): JSX.Element => {

  const pageTitle: string = 'COVID-19 Cases in the Philippines';
  
  let currentLocationURL: string = '/ph-covid19-tracker';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

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

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" />
        <link rel="stylesheet" href="/resources/css/ph-covid19-tracker.min.css" type="text/css" />
      </Helmet>

      <Page>
        <MainTitle />
        <StatusPieChart />
        <StatusOverview />
        <About />
        {/* Line Item: LordDashMe_Horizontal_Home */}
        <Ads appearance="horizontal">
          <ResponsiveAds 
            adClient={'ca-pub-3427694918014398'}
            adSlot={'4220072227'}/>
        </Ads>
        <SuggestedVideo />
        {/* Line Item: LordDashMe_Horizontal_Home_2 */}
        <Ads appearance="horizontal">
          <ResponsiveAds 
            adClient={'ca-pub-3427694918014398'}
            adSlot={'2369194966'} />
        </Ads>
        <Footer />
      </Page>

      <GoogleAdsense />
      <Youtube />
      <TwitterWidget />
      <FacebookSDK />
      <GoogleAnalytics>
        <PageView trackingId={'UA-128894279-1'} />
      </GoogleAnalytics>

    </React.Fragment>
  );
}

export default PHCovid19Tracker;
