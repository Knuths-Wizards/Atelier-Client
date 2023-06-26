import Modal from 'react-modal';
import React, { useState } from 'react';
import Question from './Question.jsx';
import AnswerList from './AnswerList.jsx';

//display questions in order of helpfulness

const QuestionList = ({ questions }) => {

const [length, setLength] = useState(questions.length)



  return (
    <>
      {length === 0 ? (
        <p>No questions. Add one below!</p>
      ) : (
        questions.map((question) => (
          <>
          <p><b>Q: {question.question_body}</b></p>
          <AnswerList answers={question.answers} />
          </>
        ))
      )}
      </>
  )
};

export default QuestionList;