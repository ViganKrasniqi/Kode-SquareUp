<h1 align="center">KODE Labs assignment</h1>

# Install and requirements

1. Cypress
2. JavaScript
4. Any IDE

Note:
You can find the assignment here  [Vigan Krasniqi assignment](https://github.com/ViganKrasniqi/Kode-SquareUp). 

First we need to install cypress:

```shell
npm install cypress
```

Open cypress, writting in terminal:

```shell
npx cypress open
```

Then it opens a Browser where you could run the test through UI


## 📁 Folder structure
```

cypress/
├─ e2e/
│  ├─ square_api/
│  │  ├─ Authorization.cy.js
│  │  ├─ Data_Validation.cy.js
│  │  ├─ Pagination.cy.js
│  │  ├─ Reports.cy.js
├─ fixtures/
│  ├─ constant.js
│  ├─ item.json
├─ plugin/
│  ├─ index.js
├─ support/
│  ├─ e2e.js
│  ├─ commands.js
│  ├─ index.js


## Test analysis

 **The file Authorization has two test cases**  :
1. Send e request with valid credentials and the Bearer Auth, and check for status code 200 (Positive test case)
2. Send e request with no Auth and check for status code 403 (Negative test case)

**The file Data_Validation has 4 test cases**:
1. Should reject invalid requests with appropriate error messages
2. should reject requests with missing parameters with appropriate error messages
3. should reject requests with invalid parameters with appropriate error messages
4. should validate successful requests with appropriate success messages

**The file Pagination has 1 test cases** :
1. should paginate large data sets correctly

**The file Reports has 2 test cases** :
1. should verify that the Square API can generate an item sales report
2. should verify that the Square API can generate a custom date range report

## Suggestions for improvements:

-Test the creation of items, using API and try to send different invalide values.

-Try to delete a items,categories using API
