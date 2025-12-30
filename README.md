# 🌐 Cypress E2E Demo

**Component + E2E testing pyramid for billing workflows**

## 🎯 **DEMO PURPOSE**
Full user journey validation (login → checkout → receipt)

## 🛠 **IMPLEMENTATION STEPS**

 Setup Cypress
 
npm init -y

npm i cypress@13.12.0 cypress-real-events

 Custom Commands (cypress/support/commands.js)

Cypress.Commands.add('apiLogin', (user) => { ... });

 Run Tests
 
npx cypress run --browser chrome --headed

npx cypress run --spec 'cypress/e2e/billing/*.cy.js'

 Parallel (cypress.config.js)
 
module.exports = { e2e: { setupNodeEvents, viewportHeight: 1080 } }


## 🔥 **TECHNICAL FEATURES**

✅ Custom commands (42 utils)

✅ SQL validation (ETL data)

✅ Video recording + reporters

✅ Component/E2E pyramid (80/20)
