class PatientForm {
  constructor () {
    this.nameTextbox = '#textbox_0'
    this.femaleGenderRadiobox = '[for="doctorCheckFemale"]'
    this.dobTextbox = '#DOB_input'
    this.bloodgroupSelect = '#BloodGroup > .e-float-input'
    this.mobileTextbox = '#PatientMobile'
    this.emailTextbox = '#textbox_43'
    this.symptomsTextbox = '#textbox_44'
    this.saveButton = '[style="z-index: 1002; display: flex; position: fixed;"] > .e-dialog > .e-footer-content > .button-container > .e-primary'
  }
}
module.exports = new PatientForm()
