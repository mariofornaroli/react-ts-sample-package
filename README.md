# React TypeScript Library Starter

This project serves as a starting point for building and publishing React libraries using TypeScript. It includes essential configurations and scripts to streamline development and deployment.

## Features

- **TypeScript**: Write React components with TypeScript for type safety and enhanced developer experience.
- **Webpack**: Bundling your library using Webpack enables tree-shaking and generates optimized builds.

## Getting Started

### Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/your-username/react-ts-sample-package.git
cd react-ts-sample-package
npm install
```

### Build the Library

In the root, execute:

```bash
npm run build
```

Alternatively, during development, build in watch mode:

```bash
npm run start
```

### Test the Library with a test webapp

Navigate to the *my-test-app* subdirectory, install the dependencies and execute the webapp with the following commands:
```bash
cd my-test-app
npm i
npm run start
```