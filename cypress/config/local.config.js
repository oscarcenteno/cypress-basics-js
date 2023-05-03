const localReporter = {
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: false,
    json: false
  }
}

module.exports = {
  reporter: localReporter.reporter,
  reporterOptions: localReporter.reporterOptions,
  projectId: 'x68pip', // Cypress Cloud project
  e2e: {
    baseUrl: 'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#',
    env: {
      MY_ENVIRONMENT_VARIABLE: 'test',
      snapshotOnly: true // cypress-plugin-api
    },
    setupNodeEvents (on, config) {
      return require('cypress-mochawesome-reporter/plugin')(on)
    }
  }
}
