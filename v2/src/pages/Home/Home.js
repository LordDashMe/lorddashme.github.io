import React, { useState, useEffect } from 'react';

import Loader from '../../components/Loader/Loader';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Statement from '../../components/Statement/Statement';
import Footer from '../../components/Footer/Footer';

function Home () {

  const [loaderVisibility, setLoaderVisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisibility(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Home">
      <Loader visibility={loaderVisibility} />
      <NavigationBar />
      <div className="page-wrapper">
        <h1>Home</h1>
      </div>
      <Statement />
      <Footer />
    </div>
  );
}

export default Home;
