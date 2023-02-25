import '../../support/index';
import {API_TOKEN} from '../../fixtures/constant'


describe('Authorization tests', () => {
  

  it('should reject unauthenticated requests', () => {
    
    cy.request({
      method: 'GET',
      url: Cypress.env('location'),
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(401);
      expect(response.body.errors[0].detail).to.eq('This request could not be authorized.');
    });
  });

  it('should allow authenticated requests', () => {
   
    // I have added a new apiRequest, where I included the the repetitive, but I used the whole Request
    // so we would now where we point, but for check commands.js in support

   // cy.apiRequest('GET', Cypress.env('location')); 

  
   
    cy.request({
      method: 'GET',
      url: Cypress.env('location'),
      failOnStatusCode: false,
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.locations).to.be.an('array');
    });
  });
})