const dashboardActions = require('./dashboard/dashboard.actions')
const patientActions = require('./patients/patients.actions.js')

describe('Patients', () => {
  it('should search for a patient', () => {
    dashboardActions.openDashboard()
    patientActions.searchPatient('Cypress')
  })
})
