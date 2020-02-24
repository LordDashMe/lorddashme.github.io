import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Section from '../../components/Section/Section';
import PoweredBy from '../../components/PoweredBy/PoweredBy';
import ContactForm from '../../components/ContactForm/ContactForm';
import Statement from '../../components/Statement/Statement';
import Footer from '../../components/Footer/Footer';

import '../../global.scss';
import './index.scss';

const Contact = (): JSX.Element => {

  const pageTitle = 'Contact';
  
  let currentLocationURL = '/contact';

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL,
    "name": "Joshua Clifford Reyes | LordDashMe",
    "author": "Joshua Clifford Reyes",
    "image": "/resources/img/profile-tianzifang-min-super.jpg",
    "description": "Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia"
  };
  
  return (
    <React.Fragment>

      <Helmet>
        <html lang="en" />

        <title>{pageTitle}</title>

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content="Joshua Clifford Reyes" />
        <meta name="description" content="Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia" />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@lorddashme" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia" />
        <meta name="twitter:creator" content="@lorddashme" />
        <meta name="twitter:image" content="/resources/img/profile-tianzifang-min-super.jpg" />
        <meta name="twitter:image:alt" content="Profile Tianzifang" />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content="/resources/img/profile-tianzifang-min-super.jpg" />
        <meta name="og:description" content="Information Technology, Web Developer, Mobile Developer, DevOps, Computer Networking, Data Structure, Multimedia" />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>
      </Helmet>

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
    </React.Fragment>
  );
}

export default Contact;
