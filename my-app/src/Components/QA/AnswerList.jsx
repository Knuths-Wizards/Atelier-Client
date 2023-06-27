import Question from './Question.jsx';
import React, { useState } from 'react';
import Answer from './Answer.jsx';

//  splice length > 2 to show two answers per question
//  when setMoreAnswers === true, change copy of button to "Collapse answers" and set view to be confined to half of the screen, and the list within should be scrollable.
// make a state in case answers are added?


const AnswerList = ({ answers }) => {

  const ids = Object.keys(answers)
  //let firstObj = ids[0]
  //console.log('1answer', answers[firstObj].helpfulness)

  return (
    <>
      {ids.length === 0 ? (
        <p>There are no answers to this question. Add one below!</p>
      ) : (
        ids.map((id) => (
        <Answer answer={answers[id]} />
        ))
      )}
    </>
  )
};

export default AnswerList;