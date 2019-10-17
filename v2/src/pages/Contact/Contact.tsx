import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Section from '../../components/Section/Section';
import PoweredBy from '../../components/PoweredBy/PoweredBy';
import ContactForm from '../../components/ContactForm/ContactForm';
import Statement from '../../components/Statement/Statement';
import Footer from '../../components/Footer/Footer';

import './Contact.scss';

function Contact () {
  document.title = 'Contact';
  return (
    <div className="Contact">
      <NavigationBar />
      <div className="Contact-wrapper">
      <PageWrapper>
        <Section id="contact"
                 title="CONTACT"
                 showThematicBreak={true}
                 showBorderTop={false}>
          <PoweredBy>
            <p>
              <small>Backend is powered by <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku: Cloud Application Platform</a></small>
            </p>
          </PoweredBy>
          <ContactForm />
        </Section>
        <Statement />
      </PageWrapper>
      </div>
      <Footer isFixedPosition={false}/>
    </div>
  );
}

export default Contact;
