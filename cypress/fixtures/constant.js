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