# K6 Performance Test
## Maintainer
Vipul Dhingra

This repository contains an advanced performance testing setup using the K6 framework, Webpack, and GitHub Actions.

## Project Setup

1. Clone the repository: https://github.com/vipul6338/k6-performance-test.git


2. Install dependencies:

npm install k6 webpack webpack-cli --save-dev
npm install --save-dev babel-loader @babel/core @babel/preset-env



3. Build the K6 test script:  npm run build

4. Run the K6 test locally:  k6 run dist/bundle.js


## Continuous Integration

The GitHub Actions workflow (`.github/workflows/k6-test.yml`) runs the K6 test automatically on push or pull request events to the `main` branch.


## I have setuped in windows and with github . So here is my env variable path
export PATH="/c/Program Files/nodejs:$PATH"


Thanks