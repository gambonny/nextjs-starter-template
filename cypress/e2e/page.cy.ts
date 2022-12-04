describe('Page', () => {
  before(function () {
    cy.visit('/')
    cy.injectAxe()
  })

  it('should load the / page', () => {
    cy.get('h1').contains('Hello world')
    cy.checkA11y()
  })
})

export {}
