import Modal from 'react-modal';
import React, { useState } from 'react';
import Question from './Question.jsx';


const QuestionList = ({ questions }) => {

  const [length, setLength] = useState(questions.length)

  //   Show 2 q's at a time; splice array in case there are more questions
  //   Display questions in order of helpfulness

  return (
    <>
      {length === 0 ? (
        <p>No questions. Add one below!</p>
      ) : (
        questions.map((question) => (
          <Question question={question} />
        ))
      )}
    </>
  )
};

export default QuestionList;