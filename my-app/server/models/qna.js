const sql = require('../db.js');
const pool = require('../db-pg.js');

module.exports = {
  getQuestions: (productId, page, count) => {
    console.log('getting questions for id: ', productId);
    return sql`
      select 
      id as question_id,
      question_body,
      TO_TIMESTAMP(question_date::double precision / 1000) AS date,
      asker_name,
      question_helpfulness,
      reported,
      (
        SELECT COALESCE (json_agg(json_build_object(
          'id', answers.id,
          'body', answers.body,
          'date', TO_TIMESTAMP(answers.date::double precision / 1000),
          'answerer_name', answers.answerer_name,
          'helpfulness', answers.helpfulness,
          'photos', (
            SELECT COALESCE(json_agg(json_build_object(
              'id', answers_photos.id,
              'url', answers_photos.url
            )), json_build_array())
            FROM answers_photos
            WHERE answers_photos.answer_id = answers.id
          )
        )), json_build_array())
        FROM answers
        WHERE answers.question_id = questions.id
      ) AS answers 
      from questions where 
      product_id = ${productId}
      limit ${count}
      offset ${page - 1}`
  },

  getAnswers: (questionId, page, count) => {
    console.log('getting answers for question:', questionId);
    return sql`
      select 
      id as answer_id,
      body,
      TO_TIMESTAMP(date::double precision / 1000),
      answerer_name
      helpfulness,
      (
        SELECT COALESCE(json_agg(json_build_object(
          'id', answers_photos.id,
          'url', answers_photos.url
        )), json_build_array())
        FROM answers_photos
        WHERE answers_photos.answer_id = answers.id
      ) as photos
      from answers where
      question_id = ${questionId}
      limit ${count} 
      offset ${page - 1}`
  },

  postQuestion: (body, name, email, product_id) => {    
    return sql`insert into questions (
      product_id, question_body, question_date, asker_name, asker_email) 
      values (${product_id}, ${body}, ${Date.now()}, ${name}, ${email})`
  },

  postAnswer: (question_id, body, name, email, photos) => {
    
    let s = 'insert into answers (question_id, body, date, answerer_name, answerer_email) values ($1, $2, $3, $4, $5) RETURNING id';

    return pool.query({text: s, values: [question_id, body, Date.now(), name, email ]})
    .then((response) => {
      let answer_id = response.rows[0].id;
      let values = photos.map((photo, index) => `($1, $${index+2})`);
      let sql = `insert into answers_photos (answer_id, url) values ${values.join(',')}`;
      let value = [answer_id, ...photos];
      return pool.query({text: sql, values: value})
    })
    .catch((err) => console.log(err));
  },

  updateQuestionHelpful: (question_id) => {
    return sql`update questions set question_helpfulness = question_helpfulness + 1
    where id = ${question_id}`
  },

  updateQuestionReported: (question_id) => {
    return sql`update questions set reported = true
    where id = ${question_id}`
  },

  updateAnswerHelpful: (answer_id) => {
    return sql`update answers set helpfulness = helpfulness + 1
    where id = ${answer_id}`
  },

  updateAnswerReported: (answer_id) => {
    return sql`update answers set reported = true
    where id = ${answer_id}`
  }
};
