# React TypeScript Library Starter

This project serves as a starting point for building and publishing React libraries using TypeScript. It includes essential configurations and scripts to streamline development and deployment.

## Features

- **TypeScript**: Write React components with TypeScript for type safety and enhanced developer experience.
- **Rollup**: Bundling your library using Rollup enables tree-shaking and generates optimized builds.
- **Jest & React Testing Library**: Provides testing utilities for writing unit tests and integration tests for your components.
- **ESLint & Prettier**: Maintains code quality and ensures consistent code style across the project.
- **GitHub Actions**: CI/CD pipeline setup for automated testing and publishing releases.

## Getting Started

### Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/your-username/my-library.git
cd my-library
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

Locate in *my-test-app* subdirectory, install the dependencies and execute the webapp with the following commabnds:
```bash
cd my-test-app
npm i
npm run start
```