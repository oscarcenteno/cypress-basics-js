class Page {
  constructor () {
    this.searchInput = 'input#schedule_searchbar'
    this.searchResult = 'div.patient-display div.e-gridcontent table tr td:nth-child(2)'
    this.addNewPatientButton = '.patient-operations > .e-control'
  }
}

module.exports = new Page()
