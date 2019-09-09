import React from 'react';

import PageInformation from '../../components/PageInformation/PageInformation';

import './NotFound.scss';

function NotFound () {
  return (
    <div className="NotFound">
      <PageInformation id="not-found" 
                       pageTitle="Page Not Found" 
                       title="PAGE NOT FOUND"
                       primaryIcon="fas fa-map-marked-alt" 
                       description="Hmm. Looks like the page you're trying to visit is not available. Maybe check the address again."/>
    </div>
  );
}

export default NotFound;

