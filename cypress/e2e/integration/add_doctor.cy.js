const dashboardActions = require('./dashboard/dashboard.actions')
const doctorsActions = require('./doctors/doctors.actions')
const questions = require('./doctors/doctors.questions')

describe('Add doctors', () => {
  it('Can  try to create a doctor', () => {
    // Given 'John' went to "dashboard" page
    dashboardActions.openDashboard()

    // When he attempts to create an invalid doctor
    doctorsActions.addInvalidDoctor()

    // Then error message will be shown
    questions.invalidEmailErrorMessageShouldBeShown()
  })
})
