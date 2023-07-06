import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';
import { getAllQuestions, getProductName } from '../routes.js';

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
      testingArr.sort((a,b) => a.helpfulness - b.helpfulness)
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

  const handleLoadMore = () => {
    setVisibleQuestions(visibleQuestions+5);
    setAllQuestionsLoaded(true);
  };

  const handleCollapse = () => {
    setVisibleQuestions(2);
    setAllQuestionsLoaded(false);
  }

  return (
    <>
    <div className="flex flex-col w-full overflow-scroll" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {sortedQuestions.length === 0 && (
        <>
         <p>No questions. Add one below!</p><br />
        </>
      )}
      {sortedQuestions.slice(0, visibleQuestions).map((question) => (
        <Question key={question.question_id} questionId={question.question_id} question={question} productName={productName}/>
      ))}
    </div>
      <div className="flex flex-row items-center justify-between items-center w-full">
      <div className="flex flex-row items-center justify-between">
      {/* {sortedQuestions.length > visibleQuestions && ( */}
      {!allQuestionsLoaded && (
        <div >
        <button
          className="btn"
          style={{
            textAlign: 'center',
            lineHeight: '29px',
            fontSize: '13px',
            margin: '10px',
            cursor: 'pointer',
          }}
          onClick={handleLoadMore}>
          More Answered Questions
        </button>
        </div>
      )}
      {allQuestionsLoaded && (
        <button className="btn"
          onClick={handleCollapse}
          style={{
          textAlign: 'center',
          lineHeight: '29px',
          fontSize: '13px',
          margin: '10px',
          cursor: 'pointer',
        }}>Collapse Answers</button>
      )}

      <br />
      <QuestionModal productId={productId} setQuestionData={setQuestionData} productName={productName}/>
      </div>
      </div>
    </>
  );
};

export default QuestionList;


// import React, { useEffect, useState } from 'react';
// import Question from './Question.jsx';
// import QuestionModal from './QuestionModal.jsx';
// import { getAllQuestions, getProductName } from '../routes.js';

// const QuestionList = ({ productId, questionData, setQuestionData, filterData }) => {

//   const [sortedQuestions, setSortedQuestions] = useState([]);
//   const [productName, setProductName] = useState('');
//   const [visibleQuestions, setVisibleQuestions] = useState(2);
//   const [allQuestionsLoaded, setAllQuestionsLoaded] = useState(false);

//   useEffect(() => {
//     getAllQuestions(productId)
//       .then(data => {
//         setQuestionData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching questions:', error);
//       });
//   }, [productId]);

//   useEffect(() => {
//     if (filterData && filterData.length > 0) {
//       const testingArr = [...filterData];
//       testingArr.sort((a,b) => a.helpfulness - b.helpfulness)
//       setSortedQuestions(testingArr);
//     }
//   }, [filterData]);

//   useEffect(() => {
//     getProductName(productId)
//       .then((response) => {
//         setProductName(response.name);
//       })
//       .catch((error) => console.error('Error fetching answers in Question component', error));
//   }, [productId]);

//   useEffect(() => {
//     if (visibleQuestions >= sortedQuestions.length) {
//       setAllQuestionsLoaded(true);
//     }
//   }, [visibleQuestions, sortedQuestions]);

//   const handleLoadMore = () => {
//     setVisibleQuestions(visibleQuestions+2);
//     setAllQuestionsLoaded(true);
//   };

//   //overflowY: 'auto'

//   return (
//     <>
//     <div class="flex flex-col w-full overflow-scroll" style={{ maxHeight: '400px', overflowY: 'auto' }}>
//       {sortedQuestions.slice(0, visibleQuestions).map((question) => (
//         <Question key={question.question_id} questionId={question.question_id} question={question} productName={productName}/>
//       ))}
//     </div>
//       <div class="flex flex-row items-center justify-between items-center w-full">
//       <div class="flex flex-row items-center justify-between">
//       {sortedQuestions.length > visibleQuestions && (
//         <div >
//         <button
//           className="btn"
//           style={{
//             textAlign: 'center',
//             lineHeight: '29px',
//             fontSize: '13px',
//             margin: '10px',
//             cursor: 'pointer',
//           }}
//           onClick={handleLoadMore}>
//           More Answered Questions
//         </button>
//         </div>
//       )}
//       <br />
//       <QuestionModal productId={productId} setQuestionData={setQuestionData} productName={productName}/>
//       </div>
//       </div>
//     </>
//   );
// };

// export default QuestionList;
