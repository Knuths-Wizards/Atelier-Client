import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';
import { getAllQuestions } from './routes.js';

const QuestionList = ({ productId, filteredList }) => {

  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    getAllQuestions(productId)
        .then(data => {
          setQuestionData(data);
        })
        .catch(error => {
          console.error('Error fetching questions:', error);
        })
  }, [productId]);


  return (
    <>
      {questionData.length === 0 ? (
        <>
          <p>No questions. Add one below!</p>
          <button>Add a New Question</button>
        </>
      ) : (
        <>
          {questionData
            .map((question) => (
              <Question questionID={question.question_id} question={question}  />
            ))}
        </>
      )}
    </>
  );
};

export default QuestionList;