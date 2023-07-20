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

CREATE INDEX idx_answers_questions_id ON answers (question_id);

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

CREATE INDEX idx_answers_photos_answers_id ON answers_photos (answer_id);

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

CREATE INDEX "idx_characteristics_product_id" ON "characteristics" ( "product_id");

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

CREATE INDEX "idx_characteristic_reviews_characteristic_id" ON "characteristic_reviews" ("characteristic_id");

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

CREATE INDEX "idx_features_product_id" ON "features" ("product_id");

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

CREATE INDEX "idx_photos_style_id" ON "photos" ("style_id");

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

CREATE INDEX "idx_related_current_product_id" ON "related" ("current_product_id");

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

CREATE INDEX idx_reviews_product_id ON reviews ("product_id");

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

CREATE INDEX "idx_reviews_photos_review_id" ON "reviews_photos" ("review_id");

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


CREATE INDEX idx_questions_product_id ON questions (product_id);

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

CREATE INDEX "idx_skus_style_id" ON "skus" ("style_id");

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

CREATE INDEX "idx_styles_product_id" ON "styles" ("product_id");