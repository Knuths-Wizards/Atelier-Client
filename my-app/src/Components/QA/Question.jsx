import React from 'react';
import { useState } from 'react';
import AnswerList from './AnswerList.jsx';

const Question = ({question}) => {

  //Add Answer functionality

  const [helpfulness, setHelpfulness] = useState(question["question_helpfulness"])
  const [alreadyVoted, setAlreadyVoted] = useState(false);

  const handleClick = () => {
    if (!alreadyVoted) {
    setHelpfulness(helpfulness + 1)
    setAlreadyVoted(true)
    } else {
      alert ('You can only vote once, sorry!')
    }
  }

  return (
    <div>
        <h4><b>Q: {question.question_body}</b></h4>
        <p><small>Helpful? <button onClick={handleClick}>Yes ({helpfulness})</button> | <button>Add Answer</button></small></p>
        <AnswerList answers={question['answers']} />
    </div>
  )
}

export default Question;
