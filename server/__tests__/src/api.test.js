'use strict';

const api = require('../../src/app');
const url = (`http://localhost:3000/api/v1/people/`);
describe ('app', () => {

  beforeAll( () => {
    api.start(3000);
  });
  afterAll( () => {
    api.stop();
  });

  it (' should show 404, it should respond with `not found` for valid requests made with an id that was not found', () => {
    return superagent
      .get(url + '?id=123')
      .catch(err => {
        expect(err.response.test).toBe('not found');
        expect(err.status).toBe(404);
      });
  });
  it (' should show 400, it should respond with `bad request` if no id was provided in the request', () => {
    return superagent.get(url).catch(err => {
      expect(err.response.test).toBe('bad request');
      expect(err.status).toBe(400);
    });
  });
  it (' should show 200, it should contain a response body for a request made with a valid id', () => {
    
  })
});