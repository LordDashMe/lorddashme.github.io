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
    actions.setWebpackConfig({
      optimization: {
        runtimeChunk: {
          name: 'webpack-runtime',
        },
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
              chunks: 'initial'
            },
          },
        }
      }
    });
  }
};
