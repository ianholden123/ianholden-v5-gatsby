/// <reference types="cypress" />

describe('Project Page', () => {
  beforeEach(() => {
    cy.visit('/projects/ian-holden-online-portfolio/')
  })

  it('displays a heading', () => {
    cy.percySnapshot('Project page responsive test', { widths: [768, 1200] })
    cy.get('h1').should('have.text', 'Ian Holden – Online Portfolio')
  })
})
