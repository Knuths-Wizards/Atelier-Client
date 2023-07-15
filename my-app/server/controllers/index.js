const productsCtrl = require('../controllers/products');
const reviewsCtrl = require('../controllers/reviewsController');
const qnaCtrl = require('../controllers/qna');

module.exports = {
  products: productsCtrl,
  reviews: reviewsCtrl,
  qna: qnaCtrl
}
