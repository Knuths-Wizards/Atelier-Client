import Search from './Search.jsx';
import Question from './Question.jsx';
import QuestionList from './QuestionList.jsx';

//this component receives an array of product questions once a user has clicked on a product. in the array is an object per question.

//only show QuestionList if there are product questions

//Add a question button event handler adds a question to the{questions} and then QuestionList is rendered; need useState (pass this function down to QuestionList; should this button go in QuestionList?)

const Main = () => {

  return (
    <Search questions={questions}/>
    <QuestionList questions={questions}/>
    <button>ADD A QUESTION</button>
    //question gets added to questions arr
  )
}