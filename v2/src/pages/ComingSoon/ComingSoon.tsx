import React from 'react';

import PageInformation from '../../components/PageInformation/PageInformation';

import './ComingSoon.scss';

const ComingSoon = (): JSX.Element => {

  document.getElementsByName('canonical')[0].setAttribute('href', document.location.href);
  
  return (
    <div className="ComingSoon">
      <PageInformation id="coming-soon" 
                       pageTitle="Page Coming Soon"
                       title="PAGE COMING SOON" 
                       primaryIcon="fas fa-hard-hat" 
                       description="This page is currently under construction."/>
    </div>
  );
}

export default ComingSoon;
