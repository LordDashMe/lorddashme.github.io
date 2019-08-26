import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

function Contact () {
  document.title = 'Contact';
  return (
    <div className="Contact">
      <NavigationBar />
      <div className="page-wrapper">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default Contact;
