module.exports = {
  clearMocks: true,

  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  coverageDirectory: 'coverage',

  moduleFileExtensions: ['js', 'json', 'jsx'],

  setupFiles: ['<rootDir>/enzyme.config.js', 'jest-localstorage-mock'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  
  verbose: false,

  transform: {
    '.+\\.(css|styl|less|sass|scss)$':
      '<rootDir>/node_modules/jest-css-modules-transform',
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov'],
  modulePathIgnorePatterns: ['src/index.js', 'src/App.js', 'src/reducers/index.js', 'src/components/index.js']
};
