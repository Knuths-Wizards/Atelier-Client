import React, { useState } from 'react';
import Question from './Question.jsx';

const QuestionList = ({ questionData }) => {



  // const handleMoreQuestions = () => {
  //   return questionData.slice(2, questionData.length).map((question) => (
  //     <Question key={question.id} question={question} />
  //   ))
  // }

  return (
    <>
      {questionData.length === 0 ? (
        <p>No questions. Add one below!</p>
      ) : (
        questionData.map((question) => {
          return <Question questionID={question.question_id} question={question.question_body} />;
        })
      )}
    </>
  );
};



export default QuestionList;