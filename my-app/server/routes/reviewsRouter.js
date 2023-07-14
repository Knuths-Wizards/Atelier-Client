const controller = require('../controllers/reviewsController.js');
const express = require('express');
const router = express.Router();

//Note: all routes start with /reviews

//get reviews
// router.get('/', controller.getReviews);
// router.get('/?:product_id', controller.getReviews);

//get meta data
router.get('/meta', controller.getMeta);

// //post review
// // router.post('/', () => reviewsCtrl.postReview);

// mark review as helpful
router.put('/:review_id/helpful', controller.updateHelpful);

// //report review
// // router.put('/:review_id/report', reviewsCtrl.updateReported);

module.exports = router;