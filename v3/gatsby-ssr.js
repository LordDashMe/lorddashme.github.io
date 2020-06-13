/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react');

exports.onRenderBody = function({ setPreBodyComponents }) {

  setPreBodyComponents([
    React.createElement('script', {
      key: 'theme-process-script',
      dangerouslySetInnerHTML: {
        __html: `
(function () {
  function setMode(theme) {
    document.body.className = theme;
    window.__theme = theme;
  }
  window.__themeConstant = {
    LIGHT: 'light',
    DARK: 'dark'
  };
  window.__theme = window.__themeConstant.LIGHT;
  window.__setTheme = function (theme) {
    if (typeof window.localStorage !== 'undefined') {
      window.localStorage.setItem('theme', theme);
    }
    setMode(theme);
  };
  if (typeof window.localStorage !== 'undefined') {
    window.__theme = window.localStorage.getItem('theme');
  }
  setMode(window.__theme);
})();
`,
      },
    }),
  ])
};
