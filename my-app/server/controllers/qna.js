const qna_models = require('../models/qna.js');

module.exports = {
  getQuestions: function (req, res) {
    //console.log('params: ', req.query.product_id);
    const productId = req.query.product_id;
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    qna_models.getQuestions(productId, page, count)
    .then((response) => {
      let questionsObj = {"product_id": productId};
      response.forEach((question) => {
        let answerObj = {};
        if (question.answers.length > 0) {
          question.answers.forEach((answer) => {
            answerObj[answer.id] = answer;
          })
        }
        question.answers = answerObj;
      })
      questionsObj.results = response;
      res.send(questionsObj);
    })
    .catch((err) => {
      console.log(err);
    })
  },

  getAnswers: function (req, res) {
    const questionId = req.params.question_id;
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    
    qna_models.getAnswers(questionId, page, count)
    .then((response) => {
      let answersObj = {
        "question": questionId,
        "page": page,
        "count": count
      };
      answersObj.results = response;
      res.send(answersObj);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}