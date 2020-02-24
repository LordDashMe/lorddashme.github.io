import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import Section from '../components/Section/Section';
import Author from '../components/Author/Author';
import StatusPieChart from '../components/SkillTechnology/Chart/StatusPieChart';
import SkillTechnology from '../components/SkillTechnology/SkillTechnology';
import Ads from '../components/Ads/Ads';
import GoogleAdsense from '../components/Ads/GoogleAdsense';
import About from '../components/About/About';
import CareerHistory from '../components/CareerHistory/CareerHistory';
import Statement from '../components/Statement/Statement';
import Footer from '../components/Footer/Footer';

import '../global.scss';
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
