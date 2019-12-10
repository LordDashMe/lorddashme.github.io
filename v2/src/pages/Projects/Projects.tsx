import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Section from '../../components/Section/Section';
import PoweredBy from '../../components/PoweredBy/PoweredBy';
import Project from '../../components/Project/Project';
import Footer from '../../components/Footer/Footer';

function Projects () {
  document.title = 'Projects';
  document.getElementsByName('canonical')[0].setAttribute('href', document.location.href);
  return (
    <div className="Projects">
      <NavigationBar />
      <PageWrapper>
        <Section id="projects" 
                 title="PROJECTS" 
                 showThematicBreak={true} 
                 showBorderTop={true}>
          <PoweredBy>
            <p>
              <small>Backend is powered by <a href="https://firebase.google.com/products/firestore/" target="_blank" rel="noopener noreferrer">Google Firebase: Cloud Firestore</a></small>
            </p>
          </PoweredBy>
          <Project />
        </Section>
      </PageWrapper>
      <Footer isFixedPosition={false}/>
    </div>
  );
}

export default Projects;
