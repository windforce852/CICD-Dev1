const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to the root of your Next.js app
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // Simulates a browser environment for testing React components
  setupFilesAfterEnv: ['./jest.setup.js'], // Specifies a setup file for configuring Jest
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Allows using `@/` as an alias for project imports
  },
  moduleDirectories: ['node_modules', '<rootDir>/'], // Ensures Jest can resolve modules
};

module.exports = createJestConfig(customJestConfig);
