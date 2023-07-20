const request = require('supertest');
const app = require('../server.js');
const db = require('../db.js');
beforeAll((done) => {
  done();
})

afterAll((done) => {
  app.close();
  db.end();
  done();
})

describe('GET Routes', () => {
  test('/reviews should return a 200 and body', async () => {
    const response = await request(app).get('/reviews');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  }, 10000)

  test('/reviews/meta should return a 200 and body', async () => {
    const response = await request(app).get('/reviews/meta');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  }, 10000)

  test('/reviews/:product_id should return a 200 and body', async () => {
    const response = await request(app).get('/reviews/2');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  }, 10000)
})

describe('PUT Routes', () => {
  test('/reviews/:review_id/helpful should return a 204', async () => {
    const response = await request(app).put('/reviews/1/helpful');
    expect(response.status).toBe(204);
  }, 10000)

  test('/reviews/:review_id/report should return a 204', async () => {
    const response = await request(app).put('/reviews/1/report');
    expect(response.status).toBe(204);
  }, 10000)
})

describe('POST Routes', () => {
  const review = {
    "product_id": 1,
    "rating": 5,
    "summary": "This is a test",
    "body": "This is a test",
    "recommend": true,
    "name": "test",
    "email": "test",
    "photos": [
      "test",
      "test2",
    ],
    "characteristics": {
      "1": 1,
      "2": 2,
    }
  }
  test('/reviews should return a 201 for proper input', async () => {
    const response = await request(app).post('/reviews').send(review);
    expect(response.status).toBe(201);
  }, 10000)

  test('/reviews should return a 400 for improper input', async () => {
    const response = await request(app).post('/reviews').send({});
    expect(response.status).toBe(400);
  }, 10000)
})

