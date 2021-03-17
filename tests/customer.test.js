const request = require('supertest');
const app = require('./../app');

describe('GET /api/customers', () => {
  it('Responds with json of all customers', async () => {
    const res = await request(app)
      .get('/api/customers');
      expect(res.statusCode).toEqual(200);
  });
});