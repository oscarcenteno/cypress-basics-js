const { click, type } = require('../wrappers/cypress_wrappers')
const sideBar = require('../shared_components/sidebar.component')
const doctorsPage = require('./doctors.page')
const addDoctorForm = require('./add_doctor.form')

function addInvalidDoctor () {
  click(sideBar.doctors)
  click(doctorsPage.addButton)
  type(addDoctorForm.nameTextBox, 'John Doe')
  click(addDoctorForm.saveButton)
}

module.exports = {
  addInvalidDoctor
}
