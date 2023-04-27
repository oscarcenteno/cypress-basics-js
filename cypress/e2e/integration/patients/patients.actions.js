const { click, type } = require('../wrappers/cypress_wrappers')
const sideBar = require('../shared_components/sidebar.component')
const patients = require('./patients.page')

function searchPatient (text) {
  click(sideBar.patients)
  type(patients.searchInput, text)
}

module.exports = {
  searchPatient
}
