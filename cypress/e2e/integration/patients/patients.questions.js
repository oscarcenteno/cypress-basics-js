const { shouldContain } = require('../wrappers/cypress_assertions')
const patients = require('./patients.page')

function searchResultShouldContain (text) {
  shouldContain(patients.patientsList, text)
}

module.exports = {
  searchResultShouldContain
}
