import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';
import { getAllQuestions, getProductName } from './routes.js';

const QuestionList = ({ productId, questionData, setQuestionData, filterData }) => {

  const [sortedQuestions, setSortedQuestions] = useState([]);
  const [productName, setProductName] = useState('');
  const [visibleQuestions, setVisibleQuestions] = useState(2);
  const [allQuestionsLoaded, setAllQuestionsLoaded] = useState(false);

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

  useEffect(() => {
    if (visibleQuestions >= sortedQuestions.length) {
      setAllQuestionsLoaded(true);
    }
  }, [visibleQuestions, sortedQuestions]);

  const handleLoadMore = () => {
    setVisibleQuestions(visibleQuestions+2);
    setAllQuestionsLoaded(true);
  };

  return (
    <>
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {sortedQuestions.slice(0, visibleQuestions).map((question) => (
        <Question key={question.question_id} questionId={question.question_id} question={question} productName={productName}/>
      ))}

      {sortedQuestions.length > visibleQuestions && (
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
          More Answered Questions
        </button>
      )}
      </div>
      <br />
      <QuestionModal productId={productId} setQuestionData={setQuestionData} productName={productName}/>
    </>
  );
};

export default QuestionList;
