import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import AboutMeImage from '../components/AboutMeImage';
import AboutMeContent from '../components/AboutMeContent';
import SocialMediaButtons from '../components/SocialMediaButtons';
import IntroductionContent from '../components/IntroductionContent';
import TwoColumnsContentWIthImage from '../components/TwoColumnsContentWIthImage';

import '../styles/fontawesome.scss';

export const Head = (): JSX.Element => {

  return (
    <SEO 
      canonical="/"
      image="/img/profile-tianzifang.min.jpg"
      imageAlt="Author Profile"
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
      <TwoColumnsContentWIthImage>
        <AboutMeImage />
        <AboutMeContent />
      </TwoColumnsContentWIthImage>
      <div className="content-clearfix"></div>
      <Footer />
    </Layout>
  );
};
