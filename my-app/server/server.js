const express = require('express');
const controller = require('./controllers');
const path = require('path');
require('dotenv').config();


// init app
const port = process.env.PORT || 3000;
const app = express();

// init express dir
let dir = path.join(__dirname, '..', '..', 'build');
app.use(express.static(dir));
app.use(express.json());

// ----- ROUTES -----
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
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

app.get('/reviews/:product_id', controller.reviews.getReviewsById);
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


// ----- START SERVER -----
var serverInstance = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = serverInstance;