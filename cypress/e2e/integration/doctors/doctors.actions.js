const { click, type } = require('../wrappers/cypress_wrappers')
const doctorsPage = require('./doctors.page')
const addDoctorForm = require('./add_doctor.form')

function addInvalidDoctor () {
  click(doctorsPage.addButton)
  type(addDoctorForm.nameTextBox, 'John Doe')
  click(addDoctorForm.saveButton)
}

module.exports = {
  addInvalidDoctor
}
