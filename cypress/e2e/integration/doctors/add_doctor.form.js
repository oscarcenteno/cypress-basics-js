class Form {
  constructor () {
    this.nameTextBox = 'input[name="Name"]'
    this.saveButton = '.button-container > :nth-child(2)'
    this.emailErrorLabel = 'label#Email-info'
  }
}
module.exports = new Form()
