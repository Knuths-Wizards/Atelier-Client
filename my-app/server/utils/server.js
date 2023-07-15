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

  app.get("/products", controller.products.getProducts);

  app.get("/products/:product_id", controller.products.getProductInfo);

  app.get("/products/:product_id/styles", controller.products.getProductStyles);

  app.get("/products/:product_id/related", controller.products.getRelatedProducts);

  return app;
}

module.exports = createServer;