const express = require('express');
const controller = require('../controllers');
const path = require('path');

function createServer() {

  const app = express();

  let dir = path.join(__dirname, '..', 'public');
  app.use(express.static(dir));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

  // Products
  app.get("/products", controller.products.getProducts);
  app.get("/products/:product_id", controller.products.getProductInfo);
  app.get("/products/:product_id/styles", controller.products.getProductStyles);
  app.get("/products/:product_id/related", controller.products.getRelatedProducts);

  // Reviews Routes
  app.get('/reviews', controller.reviews.getReviews);
  app.get('/reviews/meta', controller.reviews.getMeta);

  app.put('/reviews/:review_id/helpful', controller.reviews.updateHelpful);
  app.put('/reviews/:review_id/report', controller.reviews.updateReported);

  app.get('/reviews/:product_id', controller.reviews.getReviews);
  app.post('/reviews', controller.reviews.postReview);

  // Questions Routes
  app.get("/qa/questions", controller.qna.getQuestions);
  app.get("/qa/questions/:question_id/answers", controller.qna.getAnswers);

  app.post("/qa/questions", controller.qna.postQuestion);
  app.post("/qa/questions/:question_id/answers", controller.qna.postAnswer);

  app.put("/qa/questions/:question_id/helpful", controller.qna.markQuestionHelpful);
  app.put("/qa/questions/:question_id/report", controller.qna.reportQuestion);
  app.put("/qa/answers/:answer_id/helpful", controller.qna.markAnswerHelpful);
  app.put("/qa/answers/:answer_id/report", controller.qna.reportAnswer);

  return app;
}

module.exports = createServer;