/// <reference types="cypress" />

describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about/')
  })

  it('displays my name', () => {
    cy.percySnapshot('About page responsive test', { widths: [768, 1200] })
    cy.get('[itemprop="givenName"]').should('have.text', 'Ian')
    cy.get('[itemprop="familyName"]').should('have.text', 'Holden')
  })
  
  it('displays my job title', () => {
    cy.get('[itemprop="jobTitle"]').should('have.text', 'Software Engineer')
  })
})