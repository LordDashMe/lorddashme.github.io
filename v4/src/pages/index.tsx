import React from 'react';

import Footer from '../components/Footer';
import SEO from '../components/SEO';

export const Head = () => <SEO 
  title="Home"
  description="This is the home page of Joshua Clifford Reyes website."
  canonical="/"
  image="/favicon-32x32.png"
/>;

export default class Home extends React.Component {

  public render(): JSX.Element {

    return (
      <React.Fragment>
        <h1>Hello, World! GatsbyJS is here.</h1>
        <Footer page={'Home'}></Footer>
      </React.Fragment>
    );
  }
}
