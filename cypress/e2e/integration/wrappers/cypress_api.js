class ApiEnvironment {
  constructor () {
    this.baseUrl = 'https://jsonplaceholder.typicode.com'
  }

  get (relativeUrl) {
    return cy.api(`${this.baseUrl}${relativeUrl}`)
  }

  post ({ relativeUrl, body }) {
    return cy.api('POST', `${this.baseUrl}${relativeUrl}`, body)
  }

  put ({ relativeUrl, body }) {
    console.log(body)
    return cy.api('PUT', `${this.baseUrl}${relativeUrl}`, body)
  }

  delete (relativeUrl) {
    return cy.api('DELETE', `${this.baseUrl}${relativeUrl}`)
  }

  patch ({ relativeUrl, body }) {
    return cy.api('PATCH', `${this.baseUrl}${relativeUrl}`, body)
  }
}

module.exports = new ApiEnvironment()
