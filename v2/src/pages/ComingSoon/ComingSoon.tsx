import React from 'react';

import PageInformation from '../PageInformation/PageInformation';

import './ComingSoon.scss';

function ComingSoon () {
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
