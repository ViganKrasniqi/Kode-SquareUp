export function requestOptions () {
 const rq = {
    headers: {
      Authorization: `Bearer ${Cypress.env('API_TOKEN')}`,
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false,
  };

    return rq;
}

export const API_TOKEN = "EAAAEVcX_LFvTxvV3enASd3lbqETb6VLZSbwglXSanjJrtthZqlsi92QuLf4yUSI"
export const startDate = '2023-02-01T00:00:00Z';
export const endDate = '2023-02-21T23:59:59Z';
