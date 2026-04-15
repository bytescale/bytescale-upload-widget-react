module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^preact$": "<rootDir>/node_modules/preact/dist/preact.js",
    "^preact/compat$": "<rootDir>/node_modules/preact/compat/dist/compat.js",
    "^preact/hooks$": "<rootDir>/node_modules/preact/hooks/dist/hooks.js",
    "^preact/jsx-runtime$": "<rootDir>/node_modules/preact/jsx-runtime/dist/jsxRuntime.js",
    "@bytescale/upload-widget-react/(.*)": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.config.pretest.js"]
};
