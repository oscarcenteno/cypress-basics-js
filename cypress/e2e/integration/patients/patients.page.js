class Page {
  constructor () {
    this.searchInput = 'input#schedule_searchbar'
    this.patientsList = 'div.patient-display div.e-gridcontent table tr td'
    this.addNewPatientButton = '.patient-operations > .e-control'
  }
}

module.exports = new Page()
