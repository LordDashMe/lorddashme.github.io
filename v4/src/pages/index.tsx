import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Sayings from '../components/Sayings';
import AboutMeImage from '../components/AboutMeImage';
import AboutMeContent from '../components/AboutMeContent';
import OneColumn from '../components/Containers/OneColumn';
import TwoColumns from '../components/Containers/TwoColumns';
import SocialMediaButtons from '../components/SocialMediaButtons';
import IntroductionContent from '../components/IntroductionContent';

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
      <TwoColumns>
        <AboutMeImage />
        <AboutMeContent />
      </TwoColumns>
      <div className="content-clearfix"></div>
      <OneColumn>
        <Sayings />
      </OneColumn>
      <Footer />
    </Layout>
  );
};
