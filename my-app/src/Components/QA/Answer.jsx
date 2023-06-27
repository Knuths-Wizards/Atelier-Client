import AnswerList from './AnswerList.jsx';
import React, { useState } from 'react';
import { format } from 'date-fns';

// const [reported, setReported] = useState(false)
// add photos

const Answer = ({ answer }) => {

  const [helpfulness, setHelpfulness] = useState(answer['helpfulness'])
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
    <>
      <p><b>A: </b>{answer['body']}</p>
      <p><small>by {answer['answerer_name']} {format(new Date(answer['date']), 'MM/dd/yyyy')}  |  Helpful? <button onClick={handleClick}>Yes ({helpfulness}) </button> | <button>Report</button></small></p>
      <p>===Photos here====</p>
    </>
  )
}

export default Answer;


