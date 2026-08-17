const { defineConfig } = require("cypress");

const qautoConfig = require("./cypress/config/qauto.config");
const qauto2Config = require("./cypress/config/qauto2.config");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false,
    screenshotOnRunFailure: true,

    reporter: "mochawesome",

    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true,
    },

    setupNodeEvents(on, config) {
      const environment = config.env.environment || "qauto";

      const selectedConfig =
          environment === "qauto2" ? qauto2Config : qautoConfig;

      config.baseUrl = selectedConfig.baseUrl;
      config.env.user = selectedConfig.user;

      return config;
    },
  },
});