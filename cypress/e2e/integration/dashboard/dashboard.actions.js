const { browse } = require('../wrappers/cypress_wrappers')
const dashboard = require('./dashboard.page')

function login () {
  browse(dashboard.url)
}

module.exports = {
  login
}
