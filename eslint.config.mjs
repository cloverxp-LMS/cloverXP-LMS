module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "^@/components/(.*)$": "<rootDir>/src/components/$1",
      "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
      "^next/font/google$": "<rootDir>/__mocks__/nextFontMock.js",
      // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
      // '\\.(mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
      // '\\.(pdf|doc|docx|xls|xlsx)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!**/mocks/**"],
    coverageDirectory: "coverage",
    testPathIgnorePatterns: ["/node_modules/", "/tests/", "/mocks/"],
  };
  