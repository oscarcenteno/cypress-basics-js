const dashboardActions = require('./dashboard/dashboard.actions')
const sidebarActions = require('./shared_components/sidebar.actions')
const patientActions = require('./patients/patients.actions.js')
const patientQuestions = require('./patients/patients.questions.js')

describe('Patients', () => {
  it('can add a valid patient', () => {
    // Given 'John' had access to the Patients module
    dashboardActions.login()
    sidebarActions.accessPatients()

    // When he attempts to add a valid patient
    patientActions.addPatient('Bob')

    // Then the new patient will be listed
    patientActions.searchPatient('Bob')
    patientQuestions.searchResultShouldContain('Bob')
  })
})
