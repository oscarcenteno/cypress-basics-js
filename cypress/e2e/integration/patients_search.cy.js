const dashboardActions = require('./dashboard/dashboard.actions')
const patientActions = require('./patients/patients.actions.js')
const patientQuestions = require('./patients/patients.questions.js')

describe('Patients', () => {
  it('should search for a patient', () => {
    // Given 'John' had access to Dashboard module
    dashboardActions.login()

    // When he attempts search for a patient
    patientActions.searchPatient('Richa')

    // Then the search will show that patient as result
    patientQuestions.searchResultShouldContain('Richa')
  })
})
