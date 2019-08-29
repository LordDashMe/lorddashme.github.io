import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

function Projects () {
  document.title = 'Projects';
  return (
    <div className="Projects">
      <NavigationBar />
      <div className="page-wrapper">
        <h1>Projects</h1>
      </div>
    </div>
  );
}

export default Projects;
