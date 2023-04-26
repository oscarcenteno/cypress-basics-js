const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'x68pip',
  e2e: {
    baseUrl: 'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#',
    env: { MY_ENVIRONMENT_VARIABLE: 'test' },
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  }
})
