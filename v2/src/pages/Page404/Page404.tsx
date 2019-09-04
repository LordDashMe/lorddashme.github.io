import React, { useState, useEffect } from 'react';

import Loader from '../../components/Loader/Loader';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Section from '../../components/Section/Section';
import Footer from '../../components/Footer/Footer';

import './Page404.scss';

function Page404 () {

  document.title = 'Page Not Found';

  const [loaderVisibility, setLoaderVisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisibility(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Page404">
      <Loader visibility={loaderVisibility} />
      <NavigationBar />
      <div className="page-wrapper">
        <Section id="404" title="PAGE NOT FOUND" showThematicBreak={false}>
          <div className="page404-content">
            <i className="page-404-icon fas fa-map-marked-alt"></i>
            <p className="page-404-description">Hmm. Looks like the page you're trying to visit is not available. Maybe check the address again.</p>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default Page404;
