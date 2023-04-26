/// <reference types="cypress" />

function browse (url) {
  cy.visit(url)
}

function click (selector) {
  cy.get(selector).click()
}

function type (selector, text) {
  cy.get(selector).type(text)
}

function clickAndType (selector, text) {
  cy.get(selector).click().type(text)
}

function typeThenPressEnter (selector, text) {
  cy.get(selector).type(text).type('{enter}')
}

function doubleClick (selector) {
  cy.get(selector).dblclick()
}

function check (selector) {
  cy.get(selector).check()
}

function uncheck (selector) {
  cy.get(selector).uncheck()
}

function select (selector, value) {
  cy.get(selector).select(value)
}

function mouseover (selector) {
  cy.get(selector).trigger('mouseover')
}

function getEnvironmentVariable (name) {
  return Cypress.env(name)
}

module.exports = {
  browse,
  click,
  type,
  clickAndType,
  typeThenPressEnter,
  doubleClick,
  check,
  uncheck,
  select,
  mouseover,
  getEnvironmentVariable
}
