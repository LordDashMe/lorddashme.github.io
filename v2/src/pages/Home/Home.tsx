import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Section from '../../components/Section/Section';
import Author from '../../components/Author/Author';
import StatusPieChart from '../../components/SkillTechnology/Chart/StatusPieChart';
import SkillTechnology from '../../components/SkillTechnology/SkillTechnology';
import Ads from '../../components/Ads/Ads';
import GoogleAdsense from '../../components/Ads/GoogleAdsense';
import About from '../../components/About/About';
import CareerHistory from '../../components/CareerHistory/CareerHistory';
import Statement from '../../components/Statement/Statement';
import Footer from '../../components/Footer/Footer';

const Home = (): JSX.Element => {

  document.getElementsByName('canonical')[0].setAttribute('href', document.location.href);
  
  return (
    <div className="Home">
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
    </div>
  );
}

export default Home;
