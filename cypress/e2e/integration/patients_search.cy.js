const dashboardActions = require('./dashboard/dashboard.actions')
const patientActions = require('./patients/patients.actions.js')
const patientQuestions = require('./patients/patients.questions.js')

describe('Patients', () => {
  it('should search for a patient', () => {
    // Given 'John' went to "dashboard" page
    dashboardActions.openDashboard()

    // When I attempt search for <patient>
    patientActions.searchPatient('Richa')

    // Then search is performed
    patientQuestions.searchResultShouldContain('Richa')
  })
})
