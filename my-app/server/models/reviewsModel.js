const db = require('../db');

const orderBy = (sort) => {
  if (sort === 'newest') { return 'reviews.date asc, helpfulness desc'; }
  if (sort === 'helpful') { return 'helpfulness desc'; }
  if (sort === 'relevant') { return 'helpfulness desc, reviews.date desc'; }
  return 'reviews.date desc';
};

const getReviews = ({ product_id, page, count, sort }) => {
  let where = 'where reported = false';
  if (product_id > 0) { where += ` and product_id = ${product_id}`; }

  let order = `order by ${orderBy(sort)}`;
  let offset = (page - 1) * count;

  let sql = `
    select
      reviews.id as review_id,
      rating,
      summary,
      recommend,
      case response when 'null' then null else response end as response,
      body,
      TO_TIMESTAMP(date::double precision / 1000) AS date,
      reviewer_name,
      helpfulness,
      array_agg(json_build_object('id', reviews_photos.id, 'url', reviews_photos.url)) as photos
    from reviews
    left join reviews_photos on reviews.id = reviews_photos.id
    ${where}
    group by reviews.id
    ${order}
    limit $1::int
    offset $2::int
  `;

  let query = {
    text: sql,
    values: [count, offset]
  };

  return db.query(query);
}

const getMetaRatings = (product_id) => {
  let ratingsSql = 'select json_object_agg(id, reviews.recommend) as recommended, json_object_agg(id, reviews.rating) as ratings from reviews where product_id = $1 group by product_id';
  return db.query(ratingsSql, [product_id]);
};

const getMetaCharacteristics = (product_id) => {

  let chSql = `
    select
      name, 'id' as id, a.id, avg(value) as value
    from characteristics as a
    left join characteristic_reviews on a.id = characteristic_reviews.characteristic_id
    where product_id = $1::int
    group by name, a.id
  `;

  return db.query({text: chSql, values: [product_id]});
};

const getMeta = (product_id) => {
  let ratings = getMetaRatings(product_id);
  let characteristics = getMetaCharacteristics(product_id);
  return Promise.all([ratings, characteristics])
}

const updateHelpful = (review_id) => {
  let sql = 'update reviews set helpfulness = helpfulness + 1 where id = $1';
  return db.query({text: sql, values: [review_id]});
};

const updateReported = (review_id) => {
  let sql = 'update reviews set reported = true where id = $1';
  return db.query({text: sql, values: [review_id]});
};
module.exports = {
  getReviews,
  getMeta,
  updateHelpful,
  updateReported
};