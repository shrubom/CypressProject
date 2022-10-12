const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rxxugq",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "integration/TestFramework.js",
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 10000,
    reporter: "mochawesome",
  },
  env: {
    url: "https://rahulshettyacademy.com/angularpractice/",
  },
});
