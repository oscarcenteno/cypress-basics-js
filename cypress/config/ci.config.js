// REPORT PORTAL CONFIG
// Configuration example: https://github.com/reportportal/examples-js/tree/master/example-cypress
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin')
const launch = process.env.REPORT_PORTAL_ENVIRONMENT_NAME

const endpoint = process.env.REPORT_PORTAL_ENDPOINT || 'https://reportportal.epam.com/api/v1'
const token = process.env.REPORT_PORTAL_API_KEY || '00000000-0000-0000-0000-000000000000'
const project = process.env.REPORT_PORTAL_PROJECT_NAME || 'oscar_centeno_personal'
const os = require('os')
const hostAddress = os.hostname()

const ciReporter = {
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint,
    token,
    launch,
    project,
    description: `Cypress tests ran from ${hostAddress}`,
    autoMerge: true
  }
}

module.exports = {
  reporter: ciReporter.reporter,
  reporterOptions: ciReporter.reporterOptions,
  projectId: 'x68pip', // Cypress Cloud project
  e2e: {
    baseUrl: 'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#',
    env: {
      MY_ENVIRONMENT_VARIABLE: 'test',
      snapshotOnly: true // cypress-plugin-api
    },
    setupNodeEvents (on, config) {
      return registerReportPortalPlugin(on, config)
    }
  }
}
