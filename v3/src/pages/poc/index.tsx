import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import WEBSITE_PAGE_META from '../../common/Website/page_meta';
import IApplicationLdJSON from '../../common/Contract/IApplicationLdJSON';

const Statement = loadable(() => import('../../components/Statement/Statement'), { fallback: null });

const POC = (): JSX.Element => {

  const pageTitle: string = 'POC';
  
  let currentLocationURL: string = '/poc';

  const [click, setClick] = useState(false);

  useEffect(() => {
    currentLocationURL = document.location.href;
  }, []);

  const applicationLdJson: IApplicationLdJSON = {
    "@context": "https://schema.org",
    "@type": "website",
    "url": currentLocationURL,
    "name": pageTitle,
    "author": WEBSITE_PAGE_META.author,
    "image": WEBSITE_PAGE_META.image.src,
    "description": WEBSITE_PAGE_META.description
  };
  
  return (
    <React.Fragment>
      
      <Helmet defer={false}>
        <html lang="en" />
        
        <title>{pageTitle}</title>

        <link rel="shortcut icon" href={WEBSITE_PAGE_META.favicon} />  
        <link rel="apple-touch-icon" href={WEBSITE_PAGE_META.favicon} />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index" />
        <meta name="author" content={WEBSITE_PAGE_META.author} />
        <meta name="description" content={WEBSITE_PAGE_META.description} />
        <link rel="canonical" href={currentLocationURL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={WEBSITE_PAGE_META.twitter.site} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={WEBSITE_PAGE_META.description} />
        <meta name="twitter:creator" content={WEBSITE_PAGE_META.twitter.creator} />
        <meta name="twitter:image" content={WEBSITE_PAGE_META.image.src} />
        <meta name="twitter:image:alt" content={WEBSITE_PAGE_META.image.alt} />

        <meta name="og:url" content={currentLocationURL} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:image" content={WEBSITE_PAGE_META.image.src} />
        <meta name="og:description" content={WEBSITE_PAGE_META.description} />

        <script type="application/ld+json">{JSON.stringify(applicationLdJson)}</script>
      </Helmet>
      <div>
        <h1>Hello, World!</h1>
        <p>Welcome to the world of warcraft.</p>
        <button onClick={() => setClick(!click)}>
          Click me
        </button>
      </div>
      {click ? <Statement /> : null}
      {click ? <Statement /> : null}
      {click ? <Statement /> : null}
      {click ? <Statement /> : null}
      {click ? <Statement /> : null}
      {click ? <Statement /> : null}
      {click ? <Statement /> : null}
      {click ? <Statement /> : null}
    </React.Fragment>
  );
}

export default POC;
