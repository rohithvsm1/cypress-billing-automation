// cypress.config.js
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // ✅ CORRECT: setupNodeEvents for CONFIG events only
    setupNodeEvents(on, config) {
      // Leave empty or add valid config events only
    },
  },
});
