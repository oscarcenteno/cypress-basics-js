const { defineConfig } = require('cypress')

const configs = {
  local: 'cypress/config/local.config.js',
  dev: 'cypress/config/dev.config.js',
  ci: 'cypress/config/ci.config.js'
}

const env = process.env.REPORT_PORTAL_ENVIRONMENT_NAME || 'local'
console.log(env)

module.exports = defineConfig({
  ...configs[env],
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  }
})
