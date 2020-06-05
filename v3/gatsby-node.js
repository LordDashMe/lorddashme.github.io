/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const LoadablePlugin = require('@loadable/webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, plugins, actions }) => {
  
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()]
  });

  // This code snippet implement the webpack css code splitting.
  if (stage === 'build-javascript') {
    // The main refernce for this configuration: 
    // https://www.gatsbyjs.org/docs/production-app/#webpack-config
    actions.setWebpackConfig({
      optimization: {
        runtimeChunk: {
          name: 'webpack-runtime',
        },
        splitChunks: {
          // As stated in the documentation: https://webpack.js.org/plugins/split-chunks-plugin/
          // It is recommended to set splitChunks.name to false for production builds 
          // so that it doesn't change names unnecessarily.
          name: false,
          cacheGroups: {
            // This eliminate the process of merging all the common components implemented in the pages.
            // As a consequences of this changes, the <Link> functionality of gatsby is now useless
            // because of the pages are now implementing different CSS/JS bundled base on there statically
            // imported assets.
            commons: {
              name: false,
              chunks: 'initial',
            },
            // Remove the commons.js file.
            shared: {
              name: false,
              chunks: 'initial',
            },
            // Code split the CSS bundled.
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
              chunks: 'initial',
              enforce: true
            },
          },
        }
      }
    });
  }
};
