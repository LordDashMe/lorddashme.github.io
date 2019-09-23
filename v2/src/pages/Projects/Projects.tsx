import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

function Projects () {
  document.title = 'Projects';
  return (
    <div className="Projects">
      <NavigationBar />
      <PageWrapper>
        <h1>Projects</h1>
      </PageWrapper>
    </div>
  );
}

export default Projects;
