import React from 'react';

import SEO from '../components/SEO';
import Ads from '../components/Ads/Ads';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Saying from '../components/Saying';
import AboutMeImage from '../components/AboutMeImage';
import AboutMeContent from '../components/AboutMeContent';
import OneColumn from '../components/Containers/OneColumn';
import TwoColumns from '../components/Containers/TwoColumns';
import SocialMediaButtons from '../components/SocialMediaButtons';
import IntroductionContent from '../components/IntroductionContent';
import GoogleAdsenseResponsiveAd from '../components/Ads/GoogleAdsenseResponsiveAd';

import '../styles/fontawesome.scss';

export const Head = (): JSX.Element => {

  return (
    <SEO 
      canonical="/"
      image="img/dash-in-tianzifang.min.jpg"
      imageAlt="Dash in Tianzifang"
    />
  );
};

export default (): JSX.Element => {

  return (
    <Layout>
      <Header />
      <Banner>
        <IntroductionContent />
        <SocialMediaButtons />
      </Banner>
      <TwoColumns justifyContent='space-around'>
        <AboutMeImage />
        <AboutMeContent />
      </TwoColumns>
      <OneColumn>
        <Ads>
          <GoogleAdsenseResponsiveAd 
            adClient={'ca-pub-3427694918014398'} 
            adSlot={'4220072227'} 
          />
        </Ads>
      </OneColumn>
      <OneColumn>
        <Saying />
      </OneColumn>
      <Footer />
    </Layout>
  );
};
