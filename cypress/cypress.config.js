const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "integration/TestFramework.js",
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 10000,
  },
});
