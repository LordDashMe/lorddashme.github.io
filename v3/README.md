# lorddashme.github.io v3

The version 3 of the [lorddashme.github.io](https://lorddashme.github.io/).

## Documentation

### Requirements

- NodeJS v10 or latest.

### Tech Stacks | Packages

- [@loadable/component](https://www.npmjs.com/package/@loadable/component): Enable Code Splitting in your React application.

- [@loadable/babel-plugin](https://www.npmjs.com/package/@loadable/babel-plugin): For ```@loadable/component``` this plugin is required only if you use Server Side Rendering in your application.

- [@loadable/webpack-plugin](https://www.npmjs.com/package/@loadable/webpack-plugin): For ```@loadable/component``` this plugin is required only if you use Server Side Rendering in your application.

- [babel-preset-gatsby](https://www.npmjs.com/package/babel-preset-gatsby): Gatsby uses the phenomenal project Babel to enable support for writing modern JavaScript — while still supporting older browsers. This package contains the default Babel setup for all Gatsby projects.

- [chart.js](https://www.npmjs.com/package/chart.js?activeTab=readme): Simple yet flexible JavaScript charting for designers & developers.

- [firebase](https://www.npmjs.com/package/firebase): Firebase provides the tools and infrastructure you need to develop, grow, and earn money from your app. This package supports web (browser), mobile-web, and server (Node.js) clients.

- [gatsby](https://www.npmjs.com/package/gatsby): Blazing fast modern site generator for React.

- [gatsby-image](https://www.npmjs.com/package/gatsby-image): Speedy, optimized images without the work. gatsby-image is a React component specially designed to work seamlessly with Gatsby's GraphQL queries.

- [gatsby-plugin-manifest](https://www.npmjs.com/package/gatsby-plugin-manifest): The web app manifest (part of the PWA specification) enabled by this plugin allows users to add your site to their home screen on most mobile browsers

- [gatsby-plugin-offline](https://www.npmjs.com/package/gatsby-plugin-offline): Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. It creates a service worker for the site and loads the service worker into the client.

- [gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet): Provides drop-in support for server rendering data added with React Helmet. React Helmet is a component which lets you control your document head using their React component.

- [gatsby-plugin-sharp](https://www.npmjs.com/package/gatsby-plugin-sharp): Exposes several image processing functions built on the Sharp image processing library. This is a low-level helper plugin generally used by other Gatsby plugins. You generally shouldn't be using this directly but might find it helpful if doing very custom image processing.

- [gatsby-source-filesystem](https://www.npmjs.com/package/gatsby-source-filesystem): A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.

- [gatsby-transformer-sharp](https://www.npmjs.com/package/gatsby-transformer-sharp): Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images.

- [prop-types](https://www.npmjs.com/package/prop-types): Runtime type checking for React props and similar objects.

- [raf](https://www.npmjs.com/package/raf): requestAnimationFrame polyfill for node and the browser.

- [react](https://www.npmjs.com/package/react): is a JavaScript library for creating user interfaces.

- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2): React wrapper for Chart.js 2.

- [react-dom](https://www.npmjs.com/package/react-dom): This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

- [react-helmet](https://www.npmjs.com/package/react-helmet): This reusable React component will manage all of your changes to the document head.

- [gatsby-plugin-typescript](https://www.npmjs.com/package/gatsby-plugin-typescript): Provides drop-in support for TypeScript and TSX.

- [gatsby-plugin-scss-typescript](https://www.npmjs.com/package/gatsby-plugin-scss-typescript): Includes Gatsby V2 webpack support for SCSS stylesheets modules and automatic generation of accompanying typing declaration (.d.ts) files.

- [node-sass](https://www.npmjs.com/package/node-sass): Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

- [prettier](https://www.npmjs.com/package/prettier): Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### Usage

#### Development

- Use this registered custom npm script command ```npm run start:dev``` to start developing with exposed port stated in the CLI output.

- Note: The Development mode right now is not stable as you may see, because in the Development mode all the assets are loaded across all pages. So better to test it with Pre Production Build files.

##### Testing Pre Production Build Files

- To clean the gatsby build files: ```npm run build:clean```.

- To build the current source code: ```npm run build```.

- To serve the actual build files with temporary server: ```npm run build:serve```.

#### Production

- Execute the restore command in the root directory ```./pre-deployment.sh``` to clean all build files.

- Then use this command ```npm run build:deploy``` to deploy the build files in the root directory.
