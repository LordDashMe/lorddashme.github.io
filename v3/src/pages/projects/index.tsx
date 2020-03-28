import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

import IApplicationLdJSON from '../../common/Interface/IApplicationLdJSON';
import { loadableFallbackTemplate } from '../../common/helper';

import Page from '../../components/Page/Page';
const NavigationBar = loadable(() => import('../../components/NavigationBar/NavigationBar'), { fallback: loadableFallbackTemplate(`#navigation-bar-component`) });
const PageWrapper = loadable(() => import('../../components/PageWrapper/PageWrapper'), { fallback: loadableFallbackTemplate(`#page-wrapper-component`) });
const Section = loadable(() => import('../../components/Section/Section'), { fallback: loadableFallbackTemplate(`#section-component`) });
const PoweredBy = loadable(() => import('../../components/PoweredBy/PoweredBy'), { fallback: loadableFallbackTemplate(`#powered-by-component`) });
const Project = loadable(() => import('../../components/Project/Project'), { fallback: loadableFallbackTemplate(`#project-component`) });
const Footer = loadable(() => import('../../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });

const Projects = (): JSX.Element => {

  const pageTitle: string = 'Projects';
  
  let currentLocationURL: string = '/projects';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson: IApplicationLdJSON = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL,
    "name": "Joshua Clifford Reyes | LordDashMe",
    "author": "Joshua Clifford Reyes",
    "image": "/resources/img/profile-tianzifang-min-super.jpg",
    "description": "Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia"
  };
  
  return (
    <React.Fragment>

      <Helmet>
        <html lang="en" />

        <title>{pageTitle}</title>

        <link rel="shortcut icon" href="/resources/img/favicon.png" />  
        <link rel="apple-touch-icon" href="/resources/img/favicon.png" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content="Joshua Clifford Reyes" />
        <meta name="description" content="Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia" />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@lorddashme" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia" />
        <meta name="twitter:creator" content="@lorddashme" />
        <meta name="twitter:image" content="/resources/img/profile-tianzifang-min-super.jpg" />
        <meta name="twitter:image:alt" content="Profile Tianzifang" />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content="/resources/img/profile-tianzifang-min-super.jpg" />
        <meta name="og:description" content="Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia" />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" type="text/css" />
        <link rel="stylesheet" href="/resources/vendor/fontawesome-free-5.10.2-web/css/all.min.css" type="text/css"></link>
        <link rel="stylesheet" href="/resources/vendor/bootstrap-3.3.7/css/bootstrap.min.css" type="text/css"></link>
        <link rel="stylesheet" href="/resources/css/global.min.css" type="text/css"></link>
      </Helmet>

      <Page>
        <NavigationBar />
        <PageWrapper>
          <Section 
            id="projects" 
            title="PROJECTS"
            showThematicBreak={true} 
            showBorderTop={true}>
            <PoweredBy>
              <p>
                <small>Backend is powered by <a href="https://firebase.google.com/products/firestore/" target="_blank" rel="noopener noreferrer">Google Firebase: Cloud Firestore</a></small>
              </p>
            </PoweredBy>
            <Project />
          </Section>
        </PageWrapper>
      </Page>
      <Footer isFixedPosition={false}/>
    </React.Fragment>
  );
}

export default Projects;
