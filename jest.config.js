module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "react-uploader/(.*)": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.config.pretest.js"]
};
