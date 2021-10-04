const playwrightLauncher = require("@web/test-runner-playwright");

process.env.APP_ENV = "test";

module.exports = {
  nodeResolve: true,

  browsers: [
    playwrightLauncher.playwrightLauncher({ product: "chromium" }),
    // playwrightLauncher.playwrightLauncher({ product: "webkit" }),
    playwrightLauncher.playwrightLauncher({ product: "firefox" }),
  ],
};
