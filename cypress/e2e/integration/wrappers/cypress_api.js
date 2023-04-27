class ApiEnvironment {
  constructor () {
    this.baseUrl = 'https://jsonplaceholder.typicode.com'
  }

  get (relativeUrl) {
    return cy.request(`${this.baseUrl}${relativeUrl}`)
  }

  post ({ relativeUrl, body }) {
    return cy.request('POST', `${this.baseUrl}${relativeUrl}`, body)
  }

  put ({ relativeUrl, body }) {
    console.log(body)
    return cy.request('PUT', `${this.baseUrl}${relativeUrl}`, body)
  }

  delete (relativeUrl) {
    return cy.request('DELETE', `${this.baseUrl}${relativeUrl}`)
  }

  patch ({ relativeUrl, body }) {
    return cy.request('PATCH', `${this.baseUrl}${relativeUrl}`, body)
  }
}

module.exports = new ApiEnvironment()
