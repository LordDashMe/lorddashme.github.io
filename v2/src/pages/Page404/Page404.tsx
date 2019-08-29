import React from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

function Page404 () {
  document.title = '404';
  return (
    <div className="Page404">
      <NavigationBar />
      <div className="page-wrapper">
        <h1>Not Found</h1>
      </div>
    </div>
  );
}

export default Page404;
