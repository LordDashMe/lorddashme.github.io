import React from 'react';

import Footer from '../components/Footer';
import SEO from '../components/SEO';

export const Head = () => <SEO 
  title="Not Found"
  description="This is the not found page." 
/>;

export default class NotFound extends React.Component {

  public render(): JSX.Element {

    return (
      <React.Fragment>
        <div>Oops! I don't know your query.</div>
        <Footer page={'Not Found'}></Footer>
      </React.Fragment>
    );
  }
}
