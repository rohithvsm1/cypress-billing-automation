// cypress/support/e2e.js
/// <reference types="cypress" />

// ✅ FIX: Ignore demoqa.com JS errors HERE
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false prevents Cypress from failing the test
  return false
})
