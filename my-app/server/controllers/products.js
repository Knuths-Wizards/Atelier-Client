const dbModel = require('../models/models');

const convertToNumber = (value, limit, base) => {
  if (value === undefined) { return base; }
  let num = Number(value);
  if (isNaN(num)) { return base; }
  if (num < 0) { return base; }
  if (num > limit) { return limit; }
  return num;
};

const getProducts = (req, res) => {
  dbModel.getProducts()
  .then((response) => {
    res.status(200).send(response).end();
  })
  .catch((err) => console.log('error in controller', err))
};

const getProductInfo = (req, res) => {
  let product_id = convertToNumber(req.params.product_id, 10000000, 1);

  if (!product_id || product_id < 0) {
    return res.sendStatus(400, 'Bad Request');
  };

  dbModel.getProductInfo(product_id)
  .then((data) => {
     res.status(200).send(data[0])
      }
    )
  .catch((err) => console.log('error in controller', err))
}

const getProductStyles = (req, res) => {
  let product_id = convertToNumber(req.params.product_id, 1000, 1);
  dbModel.getProductStyles(product_id)
  .then((data) => {
    if (data.length !== 0) {
      let response = data[0].results.map((style) => {
        return {
          style_id: style.style_id,
          name: style.name,
          original_price: style.original_price,
          sale_price: style.sale_price,
          photos: style.photos === null ? [] : style.photos,
          skus: style.skus === null ? [] : style.skus
        }
      })

      console.log('datainStyles===', response)
      res.status(200).send({results: response});
      return;
    }
      res.status(200).send({results: []});
  })
  .catch((err) => console.log('styles error', err))
}

//add conditional if photo array is empty
const getRelatedProducts = (req, res) => {
  let product_id = convertToNumber(req.params.product_id);
  dbModel.getRelatedProducts(product_id)
  .then((data) => {
    let result = []
    data.forEach((dataObj) => {
      result.push(dataObj.related_product_id)
    });
    res.status(200).send(result)
  })
  .catch((err) => console.log('error', err))
}

module.exports = {
  getProducts,
  getProductInfo,
  getProductStyles,
  getRelatedProducts,
};

