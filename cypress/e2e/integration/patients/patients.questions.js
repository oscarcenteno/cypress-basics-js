const { tableRowShouldContain } = require('../wrappers/cypress_assertions')
const patients = require('./patients.page')

function searchResultShouldContain (text) {
  tableRowShouldContain(patients.searchResult, text)
}

module.exports = {
  searchResultShouldContain
}
