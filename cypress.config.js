const { defineConfig } = require('cypress')

// REPORT PORTAL CONFIG
// Configuration example: https://github.com/reportportal/examples-js/tree/master/example-cypress
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin')

const launch = process.env.REPORT_PORTAL_ENVIRONMENT_NAME || 'local'

// if launch === local
let reporter = 'cypress-mochawesome-reporter'
let reporterOptions = {
  reportDir: 'cypress/reports/mochawesome-report',
  overwrite: false,
  html: false,
  json: false
}

if (launch === 'ci') {
  reporter = '@reportportal/agent-js-cypress'
  const endpoint = process.env.REPORT_PORTAL_ENDPOINT || 'https://reportportal.epam.com/api/v1'
  const token = process.env.REPORT_PORTAL_API_KEY || '00000000-0000-0000-0000-000000000000'
  const project = process.env.REPORT_PORTAL_PROJECT_NAME || 'oscar_centeno_personal'
  const os = require('os')
  const hostAddress = os.hostname()
  reporterOptions = {
    endpoint,
    token,
    launch,
    project,
    description: `Cypress tests ran from ${hostAddress}`,
    autoMerge: true
  }
}

module.exports = defineConfig({
  reporter,
  reporterOptions,
  projectId: 'x68pip', // Cypress Cloud project
  e2e: {
    baseUrl: 'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#',
    env: { MY_ENVIRONMENT_VARIABLE: 'test' },
    setupNodeEvents (on, config) {
      const tasks = require('./cypress/e2e/integration/db/tasks')
      on('task', tasks)

      if (launch === 'ci') {
        return registerReportPortalPlugin(on, config)
      } else {
        // if launch === local
        return require('cypress-mochawesome-reporter/plugin')(on)
      }
    }
  }
})
