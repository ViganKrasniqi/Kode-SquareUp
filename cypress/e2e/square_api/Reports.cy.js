import '../../support/index';
import { API_TOKEN, startDate, endDate } from '../../fixtures/constant'
import item from '../../fixtures/item.json'


describe('Report tests', () => {


  it('should verify that the Square API can generate an item sales report', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('catalog_list'),
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      },
      qs: {
        'limit': 1,
        'types': 'ITEM'
      }
    }).then(response => {
      if (response.body.objects.length === 0) {
        // Create a new item if there are no items in the catalog
        cy.request({
          method: 'POST',
          url: Cypress.env('catalog_create_item'),
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: item
        }).then(response => {
          expect(response.status).to.eq(200);
          const itemId = response.body.item.id;
          

          cy.request({
            method: 'GET',
            url: `https://connect.squareup.com/v2/reports/item-sales`,
            headers: {
              'Authorization': `Bearer ${API_TOKEN}`
            },
            qs: {
              'item_ids': itemId,
              'begin_time': startDate,
              'end_time': endDate
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.sales).to.have.length(1);
            expect(response.body.sales[0]).to.have.property('item_id', itemId);
          });
        });
      } else {
        const itemId = response.body.objects[0].id;

        cy.request({
          method: 'GET',
          url: Cypress.env('reports_item_sales'),
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`
          },
          qs: {
            'item_ids': itemId,
            'begin_time': startDate,
            'end_time': endDate
          }
        }).then(response => {
          expect(response.status).to.eq(200);
          expect(response.body.sales).to.have.length(1);
          expect(response.body.sales[0]).to.have.property('item_id', itemId);
        });
      }
    });
  });


  it('should verify that the Square API can generate a custom date range report', () => {

    cy.request({
      method: 'GET',
      url: Cypress.env('reports_sales'),
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      },
      qs: {
        'begin_time': startDate,
        'end_time': endDate
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.sales).to.have.length.above(0);
      expect(response.body.sales[0]).to.have.property('total_money');
    });
  });
})
