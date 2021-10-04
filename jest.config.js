const path = require("path");

const pathRegex = "(/__tests__/.*|.+\\.(test|spec))\\.([jt]sx?|mjs)$";

const jestConfig = {
  // preset: "jest-playwright-preset",
  globals: {
    "ts-jest": {
      tsconfig: path.join(__dirname, "tsconfig.json"),
      warnOnly: true,
      diagnostics: {
        pathRegex: pathRegex,
        ignoreCodes: [], // "TS2691"
      },
    },
  },

  testRunner: "jest-circus/runner",
  testEnvironmentOptions: {
    // "jest-playwright": {
    //   launchOptions: {
    //     headless: true,
    //   },
    //   browsers: ["chromium", "firefox"], // "webkit"
    //   devices: [],
    //   contextOptions: {
    //     ignoreHTTPSErrors: true,
    //     // viewport: {
    //     //   width: 1920,
    //     //   height: 1080
    //     // },
    //   },
    //   serverOptions: {
    //     command: "PORT=4444 npm start",
    //     port: 4444,
    //   },
    // },
  },

  // setupFilesAfterEnv: ["expect-playwright"],

  reporters: [
    "default",
    [
      "jest-stare",
      {
        resultDir: "build/tests",
        coverageLink: "coverage/lcov-report/index.html",
      },
    ],
  ],

  roots: [
    "<rootDir>/src",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
  ],

  testRegex: pathRegex,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/etc/jest/mocks/fileTransformer.js",
  },
  moduleNameMapper: {
    "\\.(sa|sc|c|le)ss$": "identity-obj-proxy",
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "mjs",
  ],

  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx,json,mjs}",
    "!**/build/**",
    "!**/node_modules/**",
  ],
  coverageDirectory: "<rootDir>/build/tests/coverage",
};

module.exports = jestConfig;
