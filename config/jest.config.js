let watchPlugins = [];
let collectCoverage = true;
let testResultsProcessor = null;

if (process.env.JEST_TDD) {
  watchPlugins = [
    'jest-watch-master',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ];

  collectCoverage = false;
}

if (process.env.CI) {
  testResultsProcessor = "./node_modules/jest-stare";
}

const jestConfig = {
  rootDir: '../',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "\\.(png|jpg|jpeg|svg|xlsx)$": '<rootDir>/fileTransformer.js',
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/((?!@idfc/ccl-commons/assets/|@idfc/ui-commons/src))"
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/modules/',
    '<rootDir>/src/translations/',
    '<rootDir>/src/constants/'
  ],
  "watchPathIgnorePatterns": [
    ".*jest-stare.*\\.js"
  ],
  "globalSetup": "<rootDir>/tests/global-setup.js",
  collectCoverage,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    // coverage collection folders path should define here
  ],
  "globals": {
    "__DEV__": false
  },
  watchPlugins,
  testResultsProcessor
};

module.exports = jestConfig;
