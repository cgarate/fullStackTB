/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["./backend"],
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        isolatedModules: false,
      },
    ],
  },
};