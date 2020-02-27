# lorddashme.github.io v2

The version 2 of the [lorddashme.github.io](https://lorddashme.github.io/v2/).

## Documentation

### Requirements

- NodeJS v10 or latest.

### Tech Stacks | Packages

- [chart.js](https://www.npmjs.com/package/chart.js?activeTab=readme): Simple yet flexible JavaScript charting for designers & developers.

- [firebase](https://www.npmjs.com/package/firebase): Firebase provides the tools and infrastructure you need to develop, grow, and earn money from your app. This package supports web (browser), mobile-web, and server (Node.js) clients.

- [node-sass](https://www.npmjs.com/package/node-sass): Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

- [react](https://www.npmjs.com/package/react): is a JavaScript library for creating user interfaces.

- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2): React wrapper for Chart.js 2.

- [react-dom](https://www.npmjs.com/package/react-dom): This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

- [react-router](https://www.npmjs.com/package/react-router): Declarative routing for React.

- [react-router-dom](https://www.npmjs.com/package/react-router-dom): DOM bindings for React Router.

- [react-scripts](https://www.npmjs.com/package/react-scripts): This package includes scripts and configuration used by Create React App.

- [typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.

### Usage

#### Development

- Use this registered custom npm script command ```npm run start:dev``` to start developing with exposed port stated in the CLI output.

#### Production

- Execute the restore command in the root directory ```./pre-deployment.sh``` to clean all build files.

- Then use this command ```npm run build:deploy``` to deploy the build files in the root directory.
