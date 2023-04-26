const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x68pip",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
