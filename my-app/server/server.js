//Controllers
const controller = require('./controllers/reviewsController.js');

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
  app.render('index.html');
});


app.get('/reviews', controller.getReviews);
app.get('/reviews/meta', controller.getMeta);
app.put('/reviews/:review_id/helpful', controller.updateHelpful);
app.put('/reviews/:review_id/report', controller.updateReported);

app.get('/reviews/:product_id', controller.getReviews);
app.post('/reviews', controller.postReview);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));