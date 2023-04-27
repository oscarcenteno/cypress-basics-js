const { click, clearAndType } = require('../wrappers/cypress_wrappers')
const sideBar = require('../shared_components/sidebar.component')
const patientsPage = require('./patients.page')
const addPatientForm = require('./add_patient.form')

function searchPatient (text) {
  click(sideBar.patients)
  clearAndType(patientsPage.searchInput, text)
}

function addPatient (name) {
  click(patientsPage.addNewPatientButton)
  clearAndType(addPatientForm.nameTextbox, name)
  click(addPatientForm.femaleGenderRadiobox)
  clearAndType(addPatientForm.dobTextbox, '01/01/2000')
  click(addPatientForm.bloodgroupSelect)
  clearAndType(addPatientForm.mobileTextbox, '0123456789')
  clearAndType(addPatientForm.emailTextbox, '1@1.com')
  clearAndType(addPatientForm.symptomsTextbox, 'None')

  click(addPatientForm.saveButton)
}

module.exports = {
  searchPatient,
  addPatient
}
