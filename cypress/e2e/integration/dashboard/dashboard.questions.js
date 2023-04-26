const { shouldContain } = require('../cypress_assertions')
const dashboard = require('./dashboard.page')

function titleShouldContain (text) {
  return shouldContain(dashboard.mainTitle, text)
}

module.exports = {
  titleShouldContain
}
