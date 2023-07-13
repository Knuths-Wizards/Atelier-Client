-- COPY answers
-- FROM '/Users/kevin/Desktop/sei/sdc/kevin/data/answers.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY answers_photos
-- FROM '/Users/kevin/Desktop/sei/sdc/kevin/data/answers_photos.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY cart
-- FROM '/Users/kevin/Desktop/sei/sdc/kevin/data/cart.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY characteristics
-- FROM '/Users/kevin/Desktop/sei/sdc/kevin/data/characteristics.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY characteristic_reviews
-- FROM '/Users/kevin/Desktop/sei/sdc/kevin/data/characteristic_reviews.csv'
-- DELIMITER ','
-- CSV HEADER;

COPY features
FROM '/tmp/features.csv'
DELIMITER ','
CSV HEADER;

-- COPY photos
-- FROM '/Users/laurenswersky/Desktop/hackReactor/SDC/Atelier-Client-Lauren/my-app/server/init_postgres/Set2/photos.csv'
-- DELIMITER ','
-- CSV HEADER;

COPY product
FROM '/tmp/product.csv'
DELIMITER ','
CSV HEADER;

-- COPY related
-- FROM '/Users/laurenswersky/Desktop/hackReactor/SDC/Atelier-Client-Lauren/my-app/server/init_postgres/Set2/related.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY reviews
-- FROM '/Users/laurenswersky/Desktop/hackReactor/SDC/Atelier-Client-Lauren/my-app/server/init_postgres/Set3/reviews.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY reviews_photos
-- FROM '/Users/kevin/Desktop/sei/sdc/kevin/data/reviews_photos.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY questions
-- FROM '/Users/kevin/Desktop/sei/sdc/kevin/data/questions.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY skus
-- FROM '/Users/kevin/Desktop/sei/sdc/kevin/data/skus.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY styles
-- FROM '/Users/laurenswersky/Desktop/hackReactor/SDC/Atelier-Client-Lauren/my-app/server/init_postgres/Set2/styles.csv'
-- DELIMITER ','
-- null as ''
-- CSV HEADER;