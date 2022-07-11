/// <reference types="cypress" />

describe('Blogs Page', () => {
  beforeEach(() => {
    cy.visit('/blog/')
  })

  it('displays a heading', () => {
    cy.percySnapshot('Blogs page responsive test', { widths: [768, 1200] })
    cy.get('h1').should('have.text', 'Blog Posts')
  })
})
