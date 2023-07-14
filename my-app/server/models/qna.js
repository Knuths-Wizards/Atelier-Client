const sql = require('../db.js');

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
      offset ${page - 1}
    `
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
  }
};
