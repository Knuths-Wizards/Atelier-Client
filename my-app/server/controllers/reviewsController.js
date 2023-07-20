const dbModel = require('../models/reviewsModel.js');

// Helper Functions

const convertToNumber = (value, limit, base) => {
  if (value === undefined) { return base; }
  let num = Number(value);
  if (isNaN(num)) { return base; }
  if (num < 0) { return base; }
  if (num > limit) { return limit; }
  return num;
};

const sortReviews = (reviews, sort) => {
  let results = [];

  if (!Array.isArray(reviews)) return results;

  switch (sort) {
    case 'newest':
      results = reviews.sort((a, b) => b.date - a.date);
      break;
    case 'helpful':
      results = reviews.sort((a, b) => b.helpfulness - a.helpfulness);
      break;
    case 'relevant':
      results = reviews.sort((a, b) => b.helpfulness - a.helpfulness || b.date - a.date);
      break;
    default:
      results = reviews;
  }

  return results;
};


// Controller Functions

const getReviews = (req, res) => {
  let params = {
    product_id: convertToNumber(req.query?.product_id || req.params?.product_id, 10000000, 0),
    page: convertToNumber(req.query.page, 500, 1),
    count: convertToNumber(req.query.count, 100, 5),
    sort: req.query.sort || 'newest',
  };

    dbModel.getReviews(params)
    .then((data) => {
      let response = {
        product: params.product_id === 0 ? '' : String(params.product_id),
        page: params.page,
        count: data.rowCount,
        results: sortReviews(data, params.sort),
      };
      res.send(response)
    })
    .catch((err) => console.log('error', err));
};

const getReviewsById = (req, res) => {
  let params = {
    product_id: convertToNumber(req.query?.product_id || req.params?.product_id, 10000000, 0),
    page: convertToNumber(req.query.page, 500, 1),
    count: convertToNumber(req.query.count, 100, 5),
    sort: req.query.sort || 'newest',
  };

  dbModel.getReviewsById(params)
    .then((data) => {
      let response = {
        product: params.product_id === 0 ? '' : String(params.product_id),
        page: params.page,
        count: data.rowCount,
        results: sortReviews(data, params.sort),
      };
      res.send(response)
    })
    .catch((err) => console.log('error', err));
};

const getMeta = (req, res) => {
  let product_id = convertToNumber(req.query.product_id, 10000000, 1);

  if (!product_id || product_id < 0) {
    return res.sendStatus(400, 'Bad Request');
  }

  const response = {
    product_id: String(product_id),
    ratings: {},
    recommended: {},
    characteristics: {},
  };


  dbModel.getMeta(product_id)
    .then((data) => {
      response.recommended = data[0].recommended;
      response.ratings = data[0].ratings;

      data[1].forEach((row) => {
        response.characteristics[row.name] = {
          id: row.id,
          value: row.value
        }
      });

      res.send(response);

    })
    .catch((err) => console.log('error', err));
}

const updateHelpful = (req, res) => {
  let review_id = convertToNumber(req.params.review_id, 10000000, 1);
  dbModel.updateHelpful(review_id)
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => console.log('error', err));
};

const updateReported = (req, res) => {
  let review_id = convertToNumber(req.params.review_id, 10000000, 1);
  dbModel.updateReported(review_id)
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => console.log('error', err));
};

const postReview = (req, res) => {
  let params = {
    product_id: convertToNumber(req.body?.product_id || 0, 10000000, 0),
    rating: convertToNumber(req.body?.rating, 5, 0),
    summary: req.body?.summary || '',
    body: req.body?.body || '',
    recommend: req.body?.recommend || false,
    name: req.body?.name,
    email: req.body?.email,
    photos: req.body?.photos || [],
    characteristics: req.body?.characteristics || {},
  };

  if (params.product_id <= 0 || params.rating <= 0 || params.rating > 5) {
    console.log(req.body);
    return res.sendStatus(400, 'Bad Request');
  }

  dbModel.postReview(params)
    .then((data)=> res.send(201, 'Created'))
    .catch((err) => res.send(400, 'Bad Request'));
};

module.exports = {
  getReviews,
  getReviewsById,
  getMeta,
  updateHelpful,
  updateReported,
  postReview,
};