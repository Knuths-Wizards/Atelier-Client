//database connection
const sql = require('./db.js');
//Controllers
const controller = require('./controllers/products');
const reviewsController = require('./controllers/reviewsController.js');


//environment variables
require('dotenv').config();
const port = process.env.PORT || 3000;

//importing modules
const path = require('path');
const express = require('express');

//initializing express app
const app = express();

//middleware
const dir = path.join(__dirname, '..', 'public');
app.use(express.static(dir));

const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Product Routes
app.get("/products", controller.getProducts);
app.get("/products/:product_id", controller.getProductInfo);
app.get("/products/:product_id/styles", controller.getProductStyles);
app.get("/products/:product_id/related", controller.getRelatedProducts);

// Reviews Routes
app.get('/reviews', reviewsController.getReviews);
app.get('/reviews/meta', reviewsController.getMeta);
app.put('/reviews/:review_id/helpful', reviewsController.updateHelpful);
app.put('/reviews/:review_id/report', reviewsController.updateReported);

app.get('/reviews/:product_id', reviewsController.getReviews);
app.post('/reviews', reviewsController.postReview);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));