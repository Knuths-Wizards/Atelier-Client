import React, { useState } from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import App from '../../App.js';
import { getAllQuestions } from './routes.js';


const QA = ({productId, getAllQuestions}) => {

const [questionData, setQuestionData] = useState([])

// console.log('questionData in QA', questionData)

  return (
    <>
      <h3>QUESTIONS & ANSWERS</h3>
        <Search productId={productId} setQuestionData={setQuestionData} questionData={questionData} getAllQuestions={getAllQuestions}/>
        <QuestionList questionData={questionData}/>
        <button>Add a Question +</button>
        <p><br /><br /><br /></p>
        <h5>===== End of Q&A Section Here =====</h5>
        <p><br /><br /></p>
    </>
  );
}

export default QA;
