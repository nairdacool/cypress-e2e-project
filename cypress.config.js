const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    video: true,
    videosFolder: "cypress/videos",
    trashAssetsBeforeRuns: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});
