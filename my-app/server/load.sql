COPY answers
FROM '/tmp/atlier-data/answers.csv'
DELIMITER ','
CSV HEADER;

select setval('answers_id_seq', (select max(id) from answers) + 1);

COPY answers_photos
FROM '/tmp/atlier-data/answers_photos.csv'
DELIMITER ','
CSV HEADER;

select setval('answers_photos_id_seq', (select max(id) from answers_photos) + 1);

COPY cart
FROM '/tmp/atlier-data/cart.csv'
DELIMITER ','
CSV HEADER;

select setval('cart_id_seq', (select max(id) from cart) + 1);

COPY characteristics
FROM '/tmp/atlier-data/characteristics.csv'
DELIMITER ','
CSV HEADER;

select setval('characteristics_id_seq', (select max(id) from characteristics) + 1);

COPY characteristic_reviews
FROM '/tmp/atlier-data/characteristic_reviews.csv'
DELIMITER ','
CSV HEADER;

select setval('characteristic_reviews_id_seq', (select max(id) from characteristic_reviews) + 1);

COPY features
FROM '/tmp/atlier-data/features.csv'
DELIMITER ','
CSV HEADER;

select setval('features_id_seq', (select max(id) from features) + 1);

COPY photos
FROM '/tmp/atlier-data/photos.csv'
DELIMITER ','
CSV HEADER;

select setval('photos_id_seq', (select max(id) from photos) + 1);

COPY product
FROM '/tmp/atlier-data/product.csv'
DELIMITER ','
CSV HEADER;

select setval('product_id_seq', (select max(id) from product) + 1);

COPY related
FROM '/tmp/atlier-data/related.csv'
DELIMITER ','
CSV HEADER;

select setval('related_id_seq', (select max(id) from product) + 1);

COPY reviews
FROM '/tmp/atlier-data/reviews.csv'
DELIMITER ','
CSV HEADER;

select setval('reviews_id_seq', (select max(id) from reviews) + 1);

COPY reviews_photos
FROM '/tmp/atlier-data/reviews_photos.csv'
DELIMITER ','
CSV HEADER;

select setval('reviews_photos_id_seq', (select max(id) from reviews_photos) + 1);

COPY questions
FROM '/tmp/atlier-data/questions.csv'
DELIMITER ','
CSV HEADER;

select setval('questions_id_seq', (select max(id) from questions) + 1);

COPY skus
FROM '/tmp/atlier-data/skus.csv'
DELIMITER ','
CSV HEADER;

select setval('skus_id_seq', (select max(id) from skus) + 1);

COPY styles
FROM '/tmp/atlier-data/styles.csv'
DELIMITER ','
null as ''
CSV HEADER;

select setval('styles_id_seq', (select max(id) from styles) + 1);