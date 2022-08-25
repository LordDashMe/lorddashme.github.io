import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import SocialMediaButtons from '../components/SocialMediaButtons';

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
        <span>Hello, World!</span>
        <h1>Joshua Clifford <span>"Dash"</span> Reyes</h1>
        <p>Clean Code, Test Driven, Design Patterns and Best Practices. A Software Enginner, Computer Science, Computer Networking and Web Developer.</p>
        <SocialMediaButtons />
      </Banner>
      <Footer />
    </Layout>
  );
};
