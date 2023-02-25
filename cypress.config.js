const { defineConfig } = require("cypress");
const URL = 'https://connect.squareup.com/';

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    API_TOKEN : 'EAAAEVcX_LFvTxvV3enASd3lbqETb6VLZSbwglXSanjJrtthZqlsi92QuLf4yUSI',
    location: URL + 'v2/locations',
    catalog_list: URL + 'v2/catalog/list',
    catalog_batch_upsert: URL + 'v2/catalog/batch-upsert',
    catalog_create_category: URL + 'v2/catalog/create-category',
    catalog_create_item: URL + 'v2/catalog/create-item'
  },
  watchForFileChanges: false,
});
