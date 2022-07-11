/// <reference types="cypress" />

describe('Projects Page', () => {
  beforeEach(() => {
    cy.visit('/projects/')
  })

  it('displays a heading', () => {
    cy.percySnapshot('Projects page responsive test', { widths: [768, 1200] })
    cy.get('h1').should('have.text', 'Projects')
  })
})
