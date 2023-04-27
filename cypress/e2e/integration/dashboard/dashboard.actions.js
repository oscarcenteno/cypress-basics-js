const { browse } = require('../wrappers/cypress_wrappers')
const dashboard = require('./dashboard.page')

function openDashboard () {
  browse(dashboard.url)
}

module.exports = {
  openDashboard
}
