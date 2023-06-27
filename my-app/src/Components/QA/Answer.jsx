import AnswerList from './AnswerList.jsx';

// const [reported, setReported] = useState(false)
// const [expanded, setExpanded] = useState(false)
// const [moreAnswers, setMoreAnswers] = useState(false)
// const [questionVoted, setQuestionVoted] = useState(false)

//user cannot vote for helpfulness twice (useState)

//add photos

const Answer = ({ answer }) => {

  return (
    <>
      <p><b>A: </b>{answer['body']}</p>
      <p>by {answer['answerer_name']} {answer['date']}</p>
      <p>Helpful? <button>Yes ({answer['helpfulness']})</button></p>
      <button>Report</button>
      <p>Photos here</p>
    </>
  )
}

export default Answer;