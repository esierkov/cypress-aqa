const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto.forstudy.space/",
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      return config;
    },
  },
});