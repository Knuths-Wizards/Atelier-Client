const db = require('../db-pg');
const sql = require('../db');

const getReviews = ({ page, count }) => {
  let offset = (page - 1) * count;

  return sql`
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
    where reported = false
    group by reviews.id
    limit ${count}
    offset ${offset}
  `;
}

const getReviewsById = ({ product_id, page, count, sort }) => {
  let offset = (page - 1) * count;

  return sql`
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
    where reported = false and product_id = ${product_id}
    group by reviews.id
    limit ${count}
    offset ${offset}
  `;
}

const getMetaRatings = (product_id) => {
  return sql`select json_object_agg(id, reviews.recommend) as recommended, json_object_agg(id, reviews.rating) as ratings from reviews where product_id = ${product_id} group by product_id`;
};

const getMetaCharacteristics = (product_id) => {
  return sql`
    select
      name, 'id' as id, a.id, avg(value) as value
    from characteristics as a
    left join characteristic_reviews on a.id = characteristic_reviews.characteristic_id
    where product_id = ${product_id}
    group by name, a.id
  `;
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

const createReview = ({product_id, rating, summary, body, recommend, name, email}) => {
  let reviewsSql = 'insert into reviews (product_id, rating, summary, body, recommend, reviewer_name, reviewer_email) values ($1, $2, $3, $4, $5, $6, $7) returning id';
  let reviewsParams = [product_id, rating, summary, body, recommend, name, email];
  return db.query({text: reviewsSql, values: reviewsParams})
};

const createReviewPhotos = (review_id, photos) => {
  let psValues = photos.map((url, i) => `($1, $${i + 2})`).join(', ');
  let photosSql = `insert into reviews_photos (review_id, url) values ${psValues} returning id`
  return db.query({text: photosSql, values: [review_id, ...photos]})
};

const createCharacteristicReview = (review_id, characteristics) => {
  let values = '';

  for (let key in characteristics) {
    values += `(${review_id}, ${key}, ${characteristics[key]}), `;
  }

  let crSql = `insert into characteristic_reviews (review_id, characteristic_id, value) values ${values.slice(0, -2)} returning id`;

  return db.query({text: crSql});
};

const postReview = ({product_id, rating, summary, body, recommend, name, email, photos, characteristics}) => {

  return createReview({product_id, rating, summary, body, recommend, name, email})
  .then(async (result) => {
    let review_id = result.rows[0].id;
    let res1 = await createReviewPhotos(review_id, photos);
    let res2 = await createCharacteristicReview(review_id, characteristics);
    return [res1, res2];
  })
  .catch((err) => {
    console.log('create review error', err);
  });




};

module.exports = {
  getReviews,
  getReviewsById,
  getMeta,
  updateHelpful,
  updateReported,
  postReview
};