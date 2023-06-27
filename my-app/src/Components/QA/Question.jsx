import React from 'react';
import useState from 'react';
import AnswerList from './AnswerList.jsx';

const Question = ({question}) => {

  return (
    <div>
        <h4><b>Q: {question.question_body}</b></h4>
        <p>Helpful? <button>Yes ({question['question_helpfulness']})</button></p>
        <button>Add Answer</button>
        <AnswerList answers={question['answers']} />
    </div>
  )
}

export default Question;
