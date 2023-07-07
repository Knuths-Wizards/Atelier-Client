import React, { useState } from "react";
import { format } from "date-fns";
import { markAnswerAsHelpful, reportAnswer } from "../routes.js";

const Answer = ({ answer, answerId }) => {
  const [alreadyVoted, setAlreadyVoted] = useState(false);
  const [helpfulness, setAnswerHelpfulness] = useState(answer.helpfulness || 0);
  const [alreadyReported, setAlreadyReported] = useState(false);

  const handleClick = () => {
    if (!alreadyVoted) {
      markAnswerAsHelpful(answer.helpfulness);
      setAnswerHelpfulness(helpfulness + 1);
      setAlreadyVoted(true);
    } else {
      alert("You can only vote once, sorry!");
    }
  };

  const handleSubmit = () => {
    reportAnswer(answerId);
    setAlreadyReported(true);
    alert("Answer reported");
  };

  return (
    <>
      <div>
        <div className="flex flex-col w-full text-left">
          <p>
            <b>A: </b>
            {answer.body}
          </p>
        </div>
        <p>
          <small>
            by {answer.answerer_name},{" "}
            {format(new Date(answer.date), "MM/dd/yyyy")} &nbsp;&nbsp; |
            &nbsp;&nbsp; Helpful?&nbsp;&nbsp;
            <button
              onClick={handleClick}
              style={{ textDecorationLine: "underline" }}
            >
              Yes ({helpfulness})
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
            {alreadyReported ? (
              <button disabled>Reported</button>
            ) : (
              <button
                style={{ textDecorationLine: "underline" }}
                onClick={() => handleSubmit(answer.answer_id)}
              >
                Report
              </button>
            )}
          </small>
        </p>
      </div>
    </>
  );
};

export default Answer;
