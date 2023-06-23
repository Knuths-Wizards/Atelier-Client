import React from 'react';

const QuestionList = ({questions}) => {

//eventHandler ==> if button is clicked, expand the accordian

  return (
    <div>
      <h1>Questions & Answers</h1>
      {//if length is 4 or less, display all in order of helpfulness
      questions.map((question) => {
        <Question question={question} />
        })
        //else if length > 4, only show 4, then eventhandler for button below to expand it
      }
      <button>MORE ANSWERED QUESTIONS (conditional)</button>
    </div>
  )
}

export default QuestionList;