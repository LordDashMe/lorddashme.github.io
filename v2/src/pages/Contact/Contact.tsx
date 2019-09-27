import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Section from '../../components/Section/Section';
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
                 title="CONTACT ME"
                 showThematicBreak={true}
                 showBorderTop={false}>
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
