const request = require('supertest');

const app = require('../server.js');
const db = require('../db.js');

beforeAll((done) => {
  done();
})

afterAll((done) => {
  app.close();
  db.end()
  done();
})

describe('GET /products', () => {
  test('should return the list of products', async () => {
  const response = await request(app).get('/products')
    expect(response.status).toBe(200);
     expect(response.body).toBeDefined();
     expect(response.body[0]).toHaveProperty('name');
     expect(response.body[0]).toHaveProperty('slogan');
     expect(response.body[0]).toHaveProperty('description');
     expect(response.body[0]).toHaveProperty('category');
  }, 1000)
});

describe('/products/:product_id', () => {
  test('should return product info', async () => {
    const response = await request(app).get('/products/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  }, 10000);
});

describe('/products/:product_id/styles', () => {
  test('should return product styles', async () => {
    const response = await request(app).get('/products/1/styles');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  //  expect(typeof response.body.name).toBe('string');
  }, 10000);
});

describe('/products/:product_id/related', () => {
  test('should return related products', async () => {
    const response = await request(app).get('/products/1/related');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
  }, 10000);
});