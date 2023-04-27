/// <reference types="cypress" />

function shouldEqual (selector, text) {
  cy.get(selector).should('equal', text)
}

function shouldContain (selector, text) {
  cy.get(selector).should('contain', text)
}

function shouldNotContain (selector, text) {
  cy.get(selector).should('not.contain', text)
}

function shouldHaveAttribute (inputSelector, expectedValue) {
  cy.get(inputSelector).should('have.attr', 'value', expectedValue)
}

function shouldHaveLength (selector, length) {
  cy.get(selector).should('have.length', length)
}

function shouldExist (selector) {
  cy.get(selector).should('exist')
}

function shouldNotExist (selector) {
  cy.get(selector).should('not.exist')
}

function shouldBeVisible (selector) {
  cy.get(selector).should('be.visible')
}

function shouldNotBeVisible (selector) {
  cy.get(selector).should('not.be.visible')
}

function shouldHaveCSSClass (selector, className) {
  cy.get(selector).should('have.class', className)
}

function shouldHaveCSSStyle (selector, style) {
  cy.get(selector).should('have.css', style)
}

function pageTitleShouldBe (title) {
  cy.title().should('equal', title)
}

function tableShouldContainNRows (selector, rows) {
  cy.get(selector).should('have.length', rows)
}

function tableRowShouldContain (tableSelector, text) {
  cy.get(tableSelector).contains(text)
}

module.exports = {
  shouldEqual,
  shouldContain,
  shouldNotContain,
  shouldHaveAttribute,
  shouldHaveLength,
  shouldExist,
  shouldNotExist,
  shouldBeVisible,
  shouldNotBeVisible,
  shouldHaveCSSClass,
  shouldHaveCSSStyle,
  pageTitleShouldBe,
  tableShouldContainNRows,
  tableRowShouldContain
}
