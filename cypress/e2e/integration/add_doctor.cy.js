const dashboardActions = require('./dashboard/dashboard.actions')
const sidebarActions = require('./shared_components/sidebar.actions')
const doctorsActions = require('./doctors/doctors.actions')
const questions = require('./doctors/doctors.questions')

describe('Add doctors', () => {
  it('can try to create a doctor', () => {
    // Given 'John' had access to the Doctors module
    dashboardActions.login()
    sidebarActions.accessDoctors()

    // When he attempts to create an invalid doctor
    doctorsActions.addInvalidDoctor()

    // Then error message will be shown
    questions.invalidEmailErrorMessageShouldBeShown()
  })
})
