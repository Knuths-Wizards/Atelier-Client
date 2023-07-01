import axiosAtelier from '../../axiosAtelier.js';
const apiURL = process.env.REACT_APP_API_BASE_URL;

// View questions
export function getAllQuestions(productId) {
   return axiosAtelier.get(`${apiURL}qa/questions?product_id=${productId}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
 }

 //Get Answer List
export function getAnswers(questionId) {
  return axiosAtelier.get(`${apiURL}qa/questions/${questionId}/answers`)
  .then(response => response.data.results)
  .catch(error => console.error('Error fetching answer list', error))
}


// // search
// export axiosAtelier.get('/qa/questions/search', (req, res) => {
//   const { product_id, query } = req.query;

//   searchQuestions(product_id, query)
//     .then(response => {
//       res.status(200).json(response.data);
//     })
//     .catch(error => {
//       console.error('Error searching questions:', error);
//       res.sendStatus(500);
//     });
// });

// // ask a q
// export axiosAtelier.post('/qa/questions', (req, res) => {
//   const { body, name, email, product_id } = req.body;

//   submitQuestion(body, name, email, product_id)
//     .then(response => {
//       res.status(201).json(response.data);
//     })
//     .catch(error => {
//       console.error('Error submitting question:', error);
//       res.sendStatus(500);
//     });
// });



// // // Answering a question
// export axiosAtelier.post('/qa/questions/:question_id/answers', (req, res) => {
//   const { question_id } = req.params;
//   const { body, name, email } = req.body;

//   submitAnswer(question_id, body, name, email)
//     .then(response => {
//       res.status(201).json(response.data);
//     })
//     .catch(error => {
//       console.error('Error submitting answer:', error);
//       res.sendStatus(500)
//     });
// });

// // Providing feedback on a question
// export axiosAtelier.put('/qa/questions/:question_id/helpful', (req, res) => {
//   const { question_id } = req.params;

//   markQuestionAsHelpful(question_id)
//     .then(response => {
//       res.status(200).json(response.data);
//     })
//     .catch(error => {
//       console.error('Error marking question as helpful:', error);
//       res.sendStatus(500);
//     });
// });

// // // Reporting a question
// export axiosAtelier.put('/qa/questions/:question_id/report', (req, res) => {
//   const { question_id } = req.params;

// //   reportQuestion(question_id)
//     .then(response => {
//       res.status(200).json(response.data);
//     })
//     .catch(error => {
//       console.error('Error reporting question:', error);
//       res.sendStatus(500);
//     });
// // });

// Providing feedback on an answer
// export axiosAtelier.put('/qa/answers/:answer_id/helpful', (req, res) => {
//   const { answer_id } = req.params;

// //   markAnswerAsHelpful(answer_id)
//     .then(response => {
//       res.status(200).json(response.data);
//     })
//     .catch(error => {
//       console.error('Error marking answer as helpful:', error);
//       res.sendStatus(500);
//     });
// });

// // Reporting an answer
// export axiosAtelier.put('/qa/answers/:answer_id/report', (req, res) => {
//   const { answer_id } = req.params;

//   reportAnswer(answer_id)
//     .then(response => {
//       res.status(200).json(response.data);
//     })
//     .catch(error => {
//       console.error('Error reporting answer:', error);
//       res.sendStatus(500);
//     });
// });

// Helper functions

// const searchQuestions = (product_id, query) => {
//   return axiosAtelier.get(`/qa/questions/search?product_id=${product_id}&query=${query}`);
// };

// const submitQuestion = (body, name, email, product_id) => {
//   const data = { body, name, email, product_id };
//   return axiosAtelier.post('/qa/questions', data);
// };

// const submitAnswer = (question_id, body, name, email) => {
//   const data = { question_id, body, name, email };
//   return axiosAtelier.post(`/qa/questions/${question_id}/answers`, data);
// };

// const markQuestionAsHelpful = (question_id) => {
//   return axiosAtelier.put(`/qa/questions/${question_id}/helpful`);
// };

// const reportQuestion = (question_id) => {
//   return axiosAtelier.put(`/qa/questions/${question_id}/report`);
// };

// const markAnswerAsHelpful = (answer_id) => {
//   return axiosAtelier.put(`/qa/answers/${answer_id}/helpful`);
// };

// const reportAnswer = (answer_id) => {
//   return axiosAtelier.put(`/qa/answers/${answer_id}/report`);
// };