module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@bytescale/upload-widget-react/(.*)": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.config.pretest.js"]
};
