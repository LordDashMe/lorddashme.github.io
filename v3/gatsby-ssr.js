/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react');

exports.onRenderBody = function({ setPreBodyComponents }) {

  // This code was reference on the: https://github.com/insin/gatsby-plugin-dark-mode/blob/master/gatsby-ssr.js
  // and we optimized it based on the needs only of the website.
  setPreBodyComponents([
    React.createElement('script', {
      key: 'theme-process-script',
      dangerouslySetInnerHTML: {
        __html: `
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
`,
      },
    }),
  ])
};
