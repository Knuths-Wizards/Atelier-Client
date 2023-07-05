import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';
import { getAllQuestions, getProductName } from './routes.js';

const QuestionList = ({ productId, questionData, setQuestionData, filterData }) => {

  const [sortedQuestions, setSortedQuestions] = useState([]);
  const [productName, setProductName] = useState('');
  //const [visibleQuestions, setVisibleQuestions] = useState(2);

  useEffect(() => {
    getAllQuestions(productId)
      .then(data => {
        setQuestionData(data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, [productId]);

  useEffect(() => {
    if (filterData && filterData.length > 0) {
      // const sortedArr = [...questionData];
      // sortedArr.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
      // setSortedQuestions(sortedArr);
      const testingArr = [...filterData];
      testingArr.sort((a,b) => Object.keys(b.answers).length - Object.keys(a.answers).length)
      setSortedQuestions(testingArr);
    }
  }, [filterData]);

  useEffect(() => {
    getProductName(productId)
      .then((response) => {
        setProductName(response.name);
      })
      .catch((error) => console.error('Error fetching answers in Question component', error));
  }, [productId]);

  // const handleLoadMore = () => {
  //   setVisibleQuestions(prev => prev + 2);
  // };

  console.log('qid in QL', sortedQuestions)

  return (
    <>
      {sortedQuestions.slice(0,5).map((question) => (
        // (index < visibleQuestions) && (
          <Question key={question.question_id} questionId={question.question_id} question={question} productName={productName}/>
        )
    //  )
      )}
      {/* {sortedQuestions.length > visibleQuestions && (
        <button
          className="btn"
          style={{
            textAlign: 'center',
            lineHeight: '29px',
            fontSize: '13px',
            margin: '10px',
            cursor: 'pointer',
          }}
          onClick={handleLoadMore}
        >
          Show More
        </button>
      )} */}
      <br /><QuestionModal productId={productId} setQuestionData={setQuestionData} productName={productName}/>
    </>
  );
};

export default QuestionList;
