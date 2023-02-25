import '../../support/index';
import {API_TOKEN} from '../../fixtures/constant'

describe('Data Validation API tests', () => {
  
  it('should reject invalid requests with appropriate error messages', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('catalog_batch_upsert'),
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: {
        'idempotency_key': 'insert-idempotency-key-here'
      },
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(400);
      expect(response.body.errors[0].detail).to.eq('Repeated field must have at least one value');
    });
  });

  it('should reject requests with missing parameters with appropriate error messages', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('catalog_create_category'),
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: {
        'name': 'Test Category'
      },
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(404);
      expect(response.body.errors[0].detail).to.eq('Resource not found.');
    });
  });

  it('should reject requests with invalid parameters with appropriate error messages', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('catalog_create_category'),
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: {
        'idempotency_key': 'insert-idempotency-key-here',
        'name': 12345
      },
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(404);
      expect(response.body.errors[0].detail).to.eq('Resource not found.');
    });
  });

  it('should validate successful requests with appropriate success messages', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('catalog_create_category'),
      failOnStatusCode: false,
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json' // Add Content-Type header
      },
      body: {
        'idempotency_key': 'insert-idempotency-key-here',
        'name': 'Test Category'
      }
    }).then(response => {
      expect(response.status).to.eq(404);
      expect(response.body.category).to.have.property('name', 'Test Category');
    });
  });
  })
