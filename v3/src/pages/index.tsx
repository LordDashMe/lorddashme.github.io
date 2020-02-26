import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

import { loadableFallbackTemplate } from '../common/helper';

const NavigationBar = loadable(() => import('../components/NavigationBar/NavigationBar'), { fallback: loadableFallbackTemplate(`#navigation-bar-component`) });
const PageWrapper = loadable(() => import('../components/PageWrapper/PageWrapper'), { fallback: loadableFallbackTemplate(`#page-wrapper-component`) });
const Section = loadable(() => import('../components/Section/Section'), { fallback: loadableFallbackTemplate(`#section-component`) });
const Author = loadable(() => import('../components/Author/Author'), { fallback: loadableFallbackTemplate(`#author-component`) });
const StatusPieChart = loadable(() => import('../components/SkillTechnology/Chart/StatusPieChart'), { fallback: loadableFallbackTemplate(`#skill-technology-chart-status-pie-chart-component`) });
const SkillTechnology = loadable(() => import('../components/SkillTechnology/SkillTechnology'), { fallback: loadableFallbackTemplate(`#skill-technology`) });
const Ads = loadable(() => import('../components/Ads/Ads'), { fallback: loadableFallbackTemplate(`#ads-component`) });
const GoogleAdsense = loadable(() => import('../components/Ads/GoogleAdsense'), { fallback: loadableFallbackTemplate(`#ads-google-adsense-component`) });
const About = loadable(() => import('../components/About/About'), { fallback: loadableFallbackTemplate(`#about-component`) });
const CareerHistory = loadable(() => import('../components/CareerHistory/CareerHistory'), { fallback: loadableFallbackTemplate(`#career-history-component`) });
const Statement = loadable(() => import('../components/Statement/Statement'), { fallback: loadableFallbackTemplate(`#statement-component`) });
const Footer = loadable(() => import('../components/Footer/Footer'), { fallback: loadableFallbackTemplate(`#footer-component`) });

import '../common/global.scss';
import './index.scss';

const Home = (): JSX.Element => {

  const pageTitle = 'Joshua Clifford Reyes | LordDashMe';
  
  let currentLocationURL = '/';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson = {
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
      
      <Helmet >
        <html lang="en" />
        
        <title>{pageTitle}</title>

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
      </Helmet>
      
      <NavigationBar />
      <PageWrapper>
        <Section id="author" 
                 title="HELLO, WORLD!" 
                 showThematicBreak={true} 
                 showBorderTop={true}>
          <Author />
        </Section>
        <Section id="skills-technologies" 
                 title="SKILLS | TECHNOLOGIES" 
                 showThematicBreak={true} 
                 showBorderTop={true}>
          <StatusPieChart />
          <SkillTechnology />
        </Section>
        {/* Line Item: LordDashMe_Horizontal_Home */}
        <Ads appearance="horizontal">
          <GoogleAdsense adClient="ca-pub-3427694918014398"
                         adSlot="4220072227"/>
        </Ads>
        <Section id="about" 
                 title="ABOUT" 
                 showThematicBreak={true} 
                 showBorderTop={true}>
          <About />
        </Section>
        <Section id="career-history" 
                 title="CAREER HISTORY" 
                 showThematicBreak={true} 
                 showBorderTop={true}>
          <CareerHistory />
        </Section>
        <Statement />
        {/* Line Item: LordDashMe_Horizontal_Home_2 */}
        <Ads appearance="horizontal">
          <GoogleAdsense adClient="ca-pub-3427694918014398"
                         adSlot="2369194966"/>
        </Ads>
      </PageWrapper>
      <Footer isFixedPosition={false}/>
    </React.Fragment>
  );
}

export default Home;
