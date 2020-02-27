# lorddashme.github.io V2

The version 2 of the [lorddashme.github.io](https://lorddashme.github.io/v2/).

## Custom Documentation

### Tech Stacks | Packages

- [create-react-app](https://www.npmjs.com/package/create-react-app): Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

- [typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.

- [node-sass](https://www.npmjs.com/package/node-sass): Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

- [chart.js](https://www.npmjs.com/package/chart.js?activeTab=readme): Simple yet flexible JavaScript charting for designers & developers.

- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2): React wrapper for Chart.js 2.

- [firebase](https://www.npmjs.com/package/firebase): Firebase provides the tools and infrastructure you need to develop, grow, and earn money from your app. This package supports web (browser), mobile-web, and server (Node.js) clients.

### Usage

#### Development

- Use this registered custom npm script command ```npm run start:dev``` to start developing with exposed port stated in the CLI output.

#### Production

- Execute the restore command in the root directory ```./pre-deployment.sh``` to clean all build files.

- Then use this command ```npm run build:deploy``` to deploy the build files in the root directory.
