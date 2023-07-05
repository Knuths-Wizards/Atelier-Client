import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import { getAnswers, markQuestionAsHelpful } from './routes.js';
import AnswerModal from './AnswerModal.jsx';

const Question = ({ questionId, question, productName }) => {

  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [voted, setVoted] = useState(false);
  const [answerData, setAnswerData] = useState([]);
  const [alreadyReported, setAlreadyReported] = useState(false);

  console.log('questonId', questionId)


  useEffect(() => {
    getAnswers(questionId)
      .then((response) => {
        console.log('answers=====', response); //arr of objs
        setAnswerData(response);
      })
      .catch((error) => console.error('Error fetching answers in Question component', error));
  }, [questionId]);

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

  {/* {answerData.length === 0 ? (
    <p><small>No answers.</small></p>
  ) : (
    <p>Other answers here</p>)}
 */}
  //  <>
  //  {answerData.map((answer) => (
  //    <Answer key={answer.answer_id} answerId={answer.answer_id} answer={answer} helpfulness={answer.helpfulness} />
  //  ))}
  // </>

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
              <button disabled >Reported</button>
            ) : (
              <button style={{ textDecorationLine: 'underline' }} onClick={() => handleReport()}>
                Report
              </button>
            )}
          </div>
        </small>
      </div>
      <>
        {answerData.length === 0 && (
          <p>No answers to this question!</p>
        )}
        <br />
        {answerData.map((answer) => (
          <Answer key={answer.answer_id} answerId={answer.answer_id} answer={answer} helpfulness={answer.helpfulness} />
        ))}
      </>
    </div>
  );
};

export default Question;
