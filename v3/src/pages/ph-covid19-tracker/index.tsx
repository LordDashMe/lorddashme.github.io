import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../../common/helper';

const PoweredBy = loadable(() => import('../../components/PoweredBy/PoweredBy'), { fallback: loadableFallbackTemplate(`#powered-by-component`) });

const PageWrapper = loadable(() => import('./components/PageWrapper/PageWrapper'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-page-wrapper-component`) });
const MainTitle = loadable(() => import('./components/MainTitle/MainTitle'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-main-title-component`) });
const StatusPieChart = loadable(() => import('./components/Chart/StatusPieChart'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-chart-status-pie-chart-component`) });
const StatusOverview = loadable(() => import('./components/StatusOverview/StatusOverview'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-status-overview-component`) });
const Footer = loadable(() => import('./components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#ph-covid19-tracker-footer-component`) });

import '../../common/global.scss';
import './index.scss';

const Covid19Tracker = (): JSX.Element => {

  const pageTitle = 'PH COVID19 Tracker';
  
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
    "description": "A tracking page for philippines COVID19 crisis, statistic and chart overview."
  };
  
  return (
    <React.Fragment>

      <Helmet>
        <html lang="en" />

        <title>{pageTitle}</title>

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content="Joshua Clifford Reyes" />
        <meta name="description" content="A tracking page for philippines COVID19 crisis, statistic and chart overview." />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@lorddashme" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="A tracking page for philippines COVID19 crisis, statistic and chart overview." />
        <meta name="twitter:creator" content="@lorddashme" />
        <meta name="twitter:image" content="/resources/img/covid19-min.jpg" />
        <meta name="twitter:image:alt" content="Profile Tianzifang" />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content="/resources/img/covid19-min.jpg" />
        <meta name="og:description" content="A tracking page for philippines COVID19 crisis, statistic and chart overview." />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>
      </Helmet>

      <PageWrapper>
        <MainTitle />
        <PoweredBy>
          <p>
            <small>Backend is powered by <a href="https://firebase.google.com/products/firestore/" target="_blank" rel="noopener noreferrer">Google Firebase: Cloud Firestore</a></small>
          </p>
        </PoweredBy>
        <StatusPieChart />
        <StatusOverview />
        <Footer />
      </PageWrapper>

    </React.Fragment>
  );
}

export default Covid19Tracker;
