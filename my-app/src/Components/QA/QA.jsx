import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';

const QA = ({ productId }) => {

   const [questionData, setQuestionData] = useState([]);
   const [filterData, setFilterData] = useState([]);

  return (
    <>
      <h3>QUESTIONS & ANSWERS</h3><br />
      <Search setQuestionData={setQuestionData} questionData={questionData} filterData={filterData} setFilterData={setFilterData}/><br />
      <QuestionList
        productId={productId}
        questionData={questionData}
        setQuestionData={setQuestionData}
        filterData={filterData}
      />
      <br /><h5>===== End of Q&A Section Here =====</h5><br />
    </>
  );
};

export default QA;
