// index.js file
import commands from './commands';

// Add custom commands to Cypress.Commands
Object.assign(Cypress.Commands, commands);