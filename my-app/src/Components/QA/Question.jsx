import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import { getAnswers, markQuestionAsHelpful } from './routes.js';
import AnswerModal from './AnswerModal.jsx';

const Question = ({ questionId, question, productName }) => {

  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [voted, setVoted] = useState(false);
  const [answerData, setAnswerData] = useState([]);
  const [alreadyReported, setAlreadyReported] = useState(false);
  const [visibleAnswers, setVisibleAnswers] = useState(2);
  const [allAnswersLoaded, setallAnswersLoaded] = useState(false);


  useEffect(() => {
    getAnswers(questionId)
      .then((response) => {
        setAnswerData(response);
      })
      .catch((error) => console.error('Error fetching answers in Question component', error));
  }, [questionId]);

  useEffect(() => {
    if (visibleAnswers >= answerData.length) {
      setallAnswersLoaded(true);
    }
  }, [visibleAnswers, answerData]);

  const handleLoadMore = () => {
    setVisibleAnswers(visibleAnswers+2);
    setallAnswersLoaded(true);
  };

  //change to useEffect?
  const handleClick = () => {
    if (!voted) {
      markQuestionAsHelpful(question.question_id);
      setHelpfulness(helpfulness + 1);
      setVoted(true);
    } else {
      alert('You can only vote once, sorry!');
    }
  };

  const handleReport = () => {
    setAlreadyReported(true);
    alert('Question reported')
  };


  return (
    <div>
      <h4>
        <b>Q: {question.question_body}</b>
      </h4>
      <div id="question-buttons" style={{ whiteSpace: 'nowrap' }}>
        <small>
          <div className="helpful">
            Helpful?&nbsp;<button onClick={handleClick} style={{ textDecorationLine: 'underline' }}>Yes ({helpfulness})</button>
          </div>
          <div className="answerModal">
            <AnswerModal productName={productName} question={question.question_body} questionId={questionId} />
          </div>
          <div className="reported">
            {alreadyReported ? (
              <button disabled>Reported</button>
            ) : (
              <button style={{ textDecorationLine: 'underline' }} onClick={() => handleReport()}>
                Report
              </button>
            )}
          </div>
        </small>
      </div>
      {answerData.length === 0 ? (
        <p>No answers to this question!</p>
      ) : (
        <>
          {answerData.length > visibleAnswers && !allAnswersLoaded ? (
            answerData.slice(0, visibleAnswers).map((answer) => (
              <Answer key={answer.answer_id} answerId={answer.answer_id} answer={answer} helpfulness={answer.helpfulness} />
            ))
          ) : (
            answerData.map((answer) => (
              <Answer key={answer.answer_id} answerId={answer.answer_id} answer={answer} helpfulness={answer.helpfulness} />
            ))
          )}
        </>
      )}
      {allAnswersLoaded && answerData.length !== 0 ? (
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
          Collapse answers
        </button>
      ) : (
        !allAnswersLoaded && answerData.length !== 0 && (
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
            More Answers
          </button>
        )
      )}
    </div>
  )
};

  export default Question;