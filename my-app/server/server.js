//database connection
const sql = require('./db.js')
const controller = require('./controllers/products');

//environment variables
require('dotenv').config();
const port = process.env.PORT || 3000;

//importing modules
const path = require('path');
const express = require('express');

//initializing express app
const app = express();

let dir = path.join(__dirname, '..', 'public');
app.use(express.static(dir));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


app.get("/products", controller.getProducts);

app.get("/products/:product_id", controller.getProductInfo);

app.get("/products/:product_id/styles", controller.getProductStyles);

app.get("/products/:product_id/related", controller.getRelatedProducts);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


