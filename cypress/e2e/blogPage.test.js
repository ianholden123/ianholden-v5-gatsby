/// <reference types="cypress" />

describe('Blog Post', () => {
  beforeEach(() => {
    cy.visit('/blog/css-architecture-bem-oocss-smacss-acss-and-why-we-need-it/')
  })

  it('displays a heading', () => {
    cy.percySnapshot('Blog post responsive test', { widths: [768, 1200] })
    cy.get('h1').should('have.text', 'CSS Architecture (BEM, OOCSS, SMACSS & ACSS) and why we need it')
  })
})
