const request = require('supertest');
const createServer = require('./utils/server');
const app = createServer();

describe('GET /products', () => {
  test('should return the list of products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  }, 10000);
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
  }, 10000);
});

describe('/products/:product_id/related', () => {
  test('should return related products', async () => {
    const response = await request(app).get('/products/1/related');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  }, 10000);
});