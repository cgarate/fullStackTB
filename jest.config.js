/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
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