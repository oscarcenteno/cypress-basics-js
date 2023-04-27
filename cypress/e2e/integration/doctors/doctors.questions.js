const { shouldBeVisible } = require('../wrappers/cypress_assertions')
const form = require('./add_doctor.form')

function invalidEmailErrorMessageShouldBeShown () {
  return shouldBeVisible(form.emailErrorLabel)
}

module.exports = {
  invalidEmailErrorMessageShouldBeShown
}
