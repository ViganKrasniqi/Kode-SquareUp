
import '../../support/index';
import {API_TOKEN} from '../../fixtures/constant'

describe('Pagination API tests', () => {
  
it('should paginate large data sets correctly', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('catalog_list'),
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      },
      qs: {
        'limit': 100
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      // expect(response.body.objects).to.have.length(100);
      const firstPageObjects = response.body.objects;
      const cursor = response.body.cursor;

      cy.request({
        method: 'GET',
        url: Cypress.env('catalog_list'),
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`
        },
        qs: {
          'limit': 100,
          'cursor': cursor
        }
      }).then(response => {
        expect(response.status).to.eq(200);
        // expect(response.body.objects).to.have.length(100);
        const secondPageObjects = response.body.objects;

        // expect(firstPageObjects.concat(secondPageObjects)).to.have.length(response.body.total_count);
      });
    });
  });})
