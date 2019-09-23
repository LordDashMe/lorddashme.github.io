import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

function Contact () {
  document.title = 'Contact';
  return (
    <div className="Contact">
      <NavigationBar />
      <PageWrapper>
        <h1>Contact</h1>
      </PageWrapper>
    </div>
  );
}

export default Contact;
