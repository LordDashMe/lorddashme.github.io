import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Section from '../../components/Section/Section';
import Project from '../../components/Project/Project';
import Footer from '../../components/Footer/Footer';

function Projects () {
  document.title = 'Projects';
  return (
    <div className="Projects">
      <NavigationBar />
      <PageWrapper>
        <Section id="projects" 
                 title="PROJECTS" 
                 showThematicBreak={true} 
                 showBorderTop={true}>
          <Project />
        </Section>
      </PageWrapper>
      <Footer isFixedPosition={false}/>
    </div>
  );
}

export default Projects;
