import {API_TOKEN} from '../../fixtures/constant'

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
