/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

var React = require('react');

exports.onRenderBody = ({ pathname, setHtmlAttributes, setHeadComponents, setPreBodyComponents, setPostBodyComponents }) => {

  setHtmlAttributes({ lang: `en` });

  const darkModeCode = `
  (function () {
    window.__themeConstant = {
      LIGHT: 'light',
      DARK: 'dark'
    };
    function setMode(theme) {
      document.body.className = theme;
      window.__theme = theme;
    }
    window.__theme = window.__themeConstant.LIGHT;
    window.__setTheme = function (theme) {
      if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('theme', theme);
      }
      setMode(theme);
    };
    if (typeof window.localStorage !== 'undefined') {
      var fromLocalStorageTheme = window.localStorage.getItem('theme');
      window.__theme = fromLocalStorageTheme ? fromLocalStorageTheme : window.__theme;
    }
    setMode(window.__theme);
  })();
  `;

  setPreBodyComponents([
    <script key="dark-mode" dangerouslySetInnerHTML={{__html: darkModeCode}}></script>
  ]);

  if (pathname === '/') {

    setHeadComponents([
      <link rel="preconnect" key="preconnect-google-adsense" href="https://pagead2.googlesyndication.com" />,
      <link rel="dns-prefetch" key="dns-prefetch-google-adsense" href="https://pagead2.googlesyndication.com" />
    ])

    setPostBodyComponents([
      <script key="google-adsense" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" type="text/javascript" defer></script>
    ]);
  }
}
