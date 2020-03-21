import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../../common/helper';

const PageWrapper = loadable(() => import('./components/PageWrapper/PageWrapper'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-page-wrapper-component`) });
const MainTitle = loadable(() => import('./components/MainTitle/MainTitle'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-main-title-component`) });
const About = loadable(() => import('./components/About/About'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-about-component`) });
const SuggestedVideo = loadable(() => import('./components/SuggestedVideo/SuggestedVideo'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-suggested-video-component`) });
const StatusPieChart = loadable(() => import('./components/Chart/StatusPieChart'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-chart-status-pie-chart-component`) });
const StatusOverview = loadable(() => import('./components/StatusOverview/StatusOverview'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-status-overview-component`) });
const Footer = loadable(() => import('./components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-footer-component`) });

import '../../common/global.scss';
import './index.scss';

const PHCovid19Tracker = (): JSX.Element => {

  const pageTitle = 'COVID-19 Cases in the Philippines';
  
  let currentLocationURL = '/ph-covid19-tracker';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL,
    "name": pageTitle,
    "author": "Joshua Clifford Reyes",
    "image": "/resources/img/covid19-min.jpg",
    "description": "A tracking page for COVID-19 cases in the Philippines."
  };
  
  return (
    <React.Fragment>

      <Helmet>
        <html lang="en" />

        <title>{pageTitle}</title>

        <link rel="shortcut icon" href="/resources/img/virus.png" />
        <link rel="apple-touch-icon" href="/resources/img/virus.png" />

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
        <meta name="twitter:image" content="/resources/img/covid19-min.jpg" />
        <meta name="twitter:image:alt" content="COVID19" />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content="/resources/img/covid19-min.jpg" />
        <meta name="og:description" content="A tracking page for COVID-19 cases in the Philippines." />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>
      </Helmet>

      <PageWrapper>
        <MainTitle />
        <StatusPieChart />
        <StatusOverview />
        <About />
        <SuggestedVideo />
        <Footer />
      </PageWrapper>

    </React.Fragment>
  );
}

export default PHCovid19Tracker;
