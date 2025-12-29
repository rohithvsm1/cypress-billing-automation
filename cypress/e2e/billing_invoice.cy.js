describe('Basic E2E flow using Cypress', () => {
  it('completes a user flow and continues browser navigation', () => {
    cy.visit('https://demoqa.com/automation-practice-form')

    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#userEmail').type('john@test.com')

    // ✅ Correct radio selection
    cy.contains('label', 'Male').click()

    cy.get('#userNumber').type('9999999999')

    // Prevent footer/ads overlap (important for DemoQA)
    cy.get('body').then($body => {
      if ($body.find('#close-fixedban').length) {
        cy.get('#close-fixedban').click({ force: true })
      }
    })

    cy.get('#submit').click()

    cy.contains('Thanks for submitting the form').should('be.visible')
  })
})
