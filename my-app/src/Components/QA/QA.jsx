import React, { useState, useEffect } from 'react';
//import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import QuestionModal from './QuestionModal.jsx';

const QA = ({ productId }) => {

   const [question, setQuestion] = useState('');
   const [filteredList, setFilteredList] = useState([])


  return (
    <>
      <h3>QUESTIONS & ANSWERS</h3>
      {/* <Search productId={productId} setQuestionData={setQuestionData} questionData={questionData} getAllQuestions={getAllQuestions} /> */}
      <QuestionList
        productId={productId}
      />
      <QuestionModal
        question={question}
        productId={productId}
        setQuestion={setQuestion}
      />
      <br />
      <h5>===== End of Q&A Section Here =====</h5>
      <br />
    </>
  );
};

export default QA;
