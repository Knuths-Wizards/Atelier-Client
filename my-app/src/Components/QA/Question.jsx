import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import { getAnswers } from './routes.js';

        {/* <p><small>Helpful? <button onClick={handleClick}>Yes ({helpfulness})</button> | <button>Add Answer</button></small></p> */}

const Question = ({ questionID, question }) => {

  const [answers, setAnswers] = useState([])

  useEffect(() => {
    getAnswers(questionID)
    .then(data => {
      setAnswers(data)
      console.log('answersinQuestion', (answers))
    })
    .catch(error => console.error('Error fetching answers in Question component', error))
  }, [questionID])


  // const [helpfulness, setHelpfulness] = useState(question["question_helpfulness"])
  // const [alreadyVoted, setAlreadyVoted] = useState(false);

  // const handleClick = () => {
  //   if (!alreadyVoted) {
  //   setHelpfulness(helpfulness + 1)
  //   setAlreadyVoted(true)
  //   } else {
  //     alert ('You can only vote once, sorry!')
  //   }
  // }

  return (
    <div>
        <h4><b>Q: {question}</b></h4>
        <AnswerList answers={answers} />
    </div>
  )
}

export default Question;
