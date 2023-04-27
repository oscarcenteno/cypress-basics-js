const { click } = require('../wrappers/cypress_wrappers')
const sidebar = require('./sidebar.component')

function accessDoctors () {
  click(sidebar.doctors)
}

function accessPatients () {
  click(sidebar.patients)
}

module.exports = {
  accessDoctors,
  accessPatients
}
