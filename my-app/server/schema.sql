-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'answers'
--
-- ---

DROP TABLE IF EXISTS "answers";

CREATE TABLE "answers" (
  "id" SERIAL PRIMARY KEY,
  "question_id" INTEGER NULL DEFAULT NULL,
  "body" VARCHAR NULL DEFAULT NULL,
  "date" VARCHAR NULL DEFAULT NULL,
  "answerer_name" VARCHAR NULL DEFAULT NULL,
  "answerer_email" VARCHAR NULL DEFAULT NULL,
  "reported" BOOLEAN NOT NULL DEFAULT FALSE,
  "helpfulness" INTEGER NULL DEFAULT 0
);

-- ---
-- Table 'answers_photos'
--
-- ---

DROP TABLE IF EXISTS "answers_photos";

CREATE TABLE "answers_photos" (
  "id" SERIAL PRIMARY KEY,
  "answer_id" INTEGER NULL DEFAULT NULL,
  "url" VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table 'cart'
--
-- ---

DROP TABLE IF EXISTS "cart";

CREATE TABLE "cart" (
  "id" SERIAL PRIMARY KEY,
  "user_session" INTEGER NULL DEFAULT NULL,
  "product_id" INTEGER NULL DEFAULT NULL,
  "active" BOOLEAN DEFAULT FALSE
);

-- ---
-- Table 'characteristics'
--
-- ---

DROP TABLE IF EXISTS "characteristics";

CREATE TABLE "characteristics" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INTEGER NULL DEFAULT NULL,
  "name" VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table 'characteristic_reviews'
--
-- ---

DROP TABLE IF EXISTS "characteristic_reviews";

CREATE TABLE "characteristic_reviews" (
  "id" SERIAL PRIMARY KEY,
  "characteristic_id" INTEGER NULL DEFAULT NULL,
  "review_id" INTEGER NULL DEFAULT NULL,
  "value" INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'features' [NOTE: Indexes on first two columns]
--
-- ---

DROP TABLE IF EXISTS "features";

CREATE TABLE "features" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INTEGER NULL DEFAULT NULL,
  "feature" VARCHAR NULL DEFAULT NULL,
  "value" VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table 'photos' [NOTE: added indexes to first two columns]
--
-- ---

DROP TABLE IF EXISTS "photos";

CREATE TABLE "photos" (
  "id" SERIAL PRIMARY KEY,
  "style_id" INTEGER NULL DEFAULT NULL,
  "style_id" INTEGER NULL DEFAULT NULL,
  "url" VARCHAR NULL DEFAULT NULL,
  "thumbnail_url" VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table 'product' (NOTE: indexes added to first column)
--
-- ---

DROP TABLE IF EXISTS "product";

CREATE TABLE "product" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NULL DEFAULT NULL,
  "slogan" VARCHAR NULL DEFAULT NULL,
  "description" VARCHAR NULL DEFAULT NULL,
  "category" VARCHAR NULL DEFAULT NULL,
  "default_price" INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'related' [NOTE: created indexes on first two columns]
--
-- ---

DROP TABLE IF EXISTS "related";

CREATE TABLE "related" (
  "id" SERIAL PRIMARY KEY,
  "current_product_id" INTEGER NULL DEFAULT NULL,
  "related_product_id" INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'reviews'
--
-- ---

DROP TABLE IF EXISTS "reviews";

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INTEGER DEFAULT NULL,
  "rating" INTEGER NULL DEFAULT NULL,
  "date" VARCHAR NULL DEFAULT NULL,
  "summary" VARCHAR NULL DEFAULT NULL,
  "body" VARCHAR NULL DEFAULT NULL,
  "recommend" BOOLEAN NULL DEFAULT false,
  "reported" BOOLEAN NULL DEFAULT false,
  "reviewer_name" VARCHAR NULL DEFAULT NULL,
  "reviewer_email" VARCHAR NULL DEFAULT NULL,
  "response" VARCHAR NULL DEFAULT NULL,
  "helpfulness" INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'reviews_photos'
--
-- ---

DROP TABLE IF EXISTS "reviews_photos";

CREATE TABLE "reviews_photos" (
  "id" SERIAL PRIMARY KEY,
  "review_id" INTEGER NULL DEFAULT NULL,
  "url" VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table 'questions'
--
-- ---

DROP TABLE IF EXISTS "questions";

CREATE TABLE "questions" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INTEGER NULL DEFAULT NULL,
  "question_body" VARCHAR NULL DEFAULT NULL,
  "question_date" VARCHAR NULL DEFAULT NULL,
  "asker_name" VARCHAR NULL DEFAULT NULL,
  "asker_email" VARCHAR NULL DEFAULT NULL,
  "reported" BOOLEAN NOT NULL DEFAULT FALSE,
  "question_helpfulness" INTEGER NOT NULL DEFAULT 0
);

-- ---
-- Table 'skus' [NOTE: added indexes on first two columns]
--
-- ---

DROP TABLE IF EXISTS "skus";

CREATE TABLE "skus" (
  "id" SERIAL PRIMARY KEY,
  "style_id" INTEGER NULL DEFAULT NULL,
  "size" VARCHAR NULL DEFAULT NULL,
  "quantity" INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'styles' [NOTE: added indexes on first two columns]
--
-- ---

DROP TABLE IF EXISTS "styles";

CREATE TABLE "styles" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INTEGER NULL DEFAULT NULL,
  "name" VARCHAR NULL DEFAULT NULL,
  "sale_price" VARCHAR NULL DEFAULT NULL,
  "original_price" INTEGER NULL DEFAULT NULL,
  "default_style" INTEGER NULL DEFAULT NULL
);