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



// let server;

// beforeAll((done) => {
//   server = app.listen(done);
// });

// describe('/qa/questions', () => {
//   test('should return the list of questions for the selected product', async () => {
//     const response = await request(app).get('/qa/questions/?product_id=1');
//     console.log('question response: ', typeof response.body);
//     expect(response.status).toBe(200);
//     expect(response.body).toBeDefined();
//   }, 20000);
// });

describe('/qa/questions/:question_id/answers', () => {
  test('should return the list of answers for the selected question', async () => {
    const response = await request(app).get('/qa/questions/1/answers');
    console.log('answer response: ', response.body);
    expect(response.status).toBe(200);
    expect(response.body.results[0].body).toBeDefined();
  });
});
