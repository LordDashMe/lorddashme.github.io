import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export const Head = (): JSX.Element => {

  return (
    <SEO 
      title="Oops! Something's not right"
      description="Hmm. Looks like the page you're trying to visit is not available. Maybe check the address again." 
    />
  );
};

export default (): JSX.Element => {

  return (
    <Layout>
      <Header />
      <Banner>
        <h1>Oops! Something's not right</h1>
        <p>Hmm. Looks like the page you're trying to visit is not available. Maybe check the address again.</p>
      </Banner>
      <Footer />
    </Layout>
  );
};
