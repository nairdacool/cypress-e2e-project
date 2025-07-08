const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videosFolder: 'cypress/videos',
    trashAssetsBeforeRuns: true,
  },
});
