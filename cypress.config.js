const { defineConfig } = require("cypress");
const URL = 'https://connect.squareup.com/';

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    location: URL + 'v2/locations',
    catalog_list: URL + 'v2/catalog/list',
    catalog_batch_upsert: URL + 'v2/catalog/batch-upsert',
    catalog_create_category: URL + 'v2/catalog/create-category',
    catalog_create_item: URL + 'v2/catalog/create-item',
    reports_item_sales: URL + 'v2/reports/item-sales',
    reports_sales: URL + 'v2/reports/sales',
  },
  watchForFileChanges: false,
});
