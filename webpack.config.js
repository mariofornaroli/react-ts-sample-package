const path = require('path');

module.exports = {
  mode: 'production', // Set mode to production for optimization
  entry: './src/index.tsx', // Entry point for your library
  output: {
    filename: 'index.js', // Output filename for your library
    path: path.resolve(__dirname, 'dist'), // Output directory
    library: { // Define library name for external usage
      name: 'react-ts-sample-package', // Replace with your library name
      type: 'umd', // Support CommonJS, AMD, and ES modules
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve file extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader', // Use ts-loader for TypeScript compilation
        exclude: /node_modules/,
      },
    ],
  },
  externals: { // Externalize React to avoid bundling it
    react: 'react',
    'react-dom': 'react-dom',
  },
};
