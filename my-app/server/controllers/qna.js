const qna_models = require('../models/qna.js');

module.exports = {
  getQuestions: (req, res) => {
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

  getAnswers: (req, res) => {
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
  },

  postQuestion: (req, res) => {
    let body = req.body.body;
    let name = req.body.name;
    let email = req.body.email;
    let product_id = req.body.product_id;
    qna_models.postQuestion(body, name, email, product_id)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
    })
  },

  postAnswer: (req, res) => {
    let question_id = req.params.question_id;
    let body = req.body.body;
    let name	= req.body.name;
    let email = req.body.email;
    let photos	= req.body.photos;

    qna_models.postAnswer(question_id, body, name, email, photos)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
    })
  },

  markQuestionHelpful: (req, res) => {
    let question_id = req.params.question_id;

    qna_models.updateQuestionHelpful(question_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
    })
  },

  reportQuestion: (req, res) => {
    let question_id = req.params.question_id;

    qna_models.updateQuestionReported(question_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
    })
  },

  markAnswerHelpful: (req, res) => {
    let answer_id = req.params.answer_id;

    qna_models.updateAnswerHelpful(answer_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
    })
  },

  reportAnswer: (req, res) => {
    let answer_id = req.params.answer_id;

    qna_models.updateAnswerReported(answer_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}