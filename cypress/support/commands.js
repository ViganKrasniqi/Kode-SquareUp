// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export const API_TOKEN = 'EAAAEVcX_LFvTxvV3enASd3lbqETb6VLZSbwglXSanjJrtthZqlsi92QuLf4yUSI';


Cypress.Commands.add("apiRequest", (method, url, body = null) => {
  const requestOptions = {
    method,
    url,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false,
  };
  if (body) {
    requestOptions.body = JSON.stringify(body);
  }
  return cy.request(requestOptions);
});



