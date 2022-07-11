/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays my name', () => {
    cy.percySnapshot('Homepage responsive test', { widths: [768, 1200] })
    cy.get('[itemprop="givenName"]').should('have.text', 'Ian')
    cy.get('[itemprop="familyName"]').should('have.text', 'Holden')
  })
})
