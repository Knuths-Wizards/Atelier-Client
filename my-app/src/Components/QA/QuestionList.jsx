// import Modal from 'react-modal';
// import React, { useState } from 'react';
// import Question from './Question.jsx';

// const QuestionList = ({ questions }) => {

//   const [modalState, setModalState] = useState(false);

//   const handleExpand = () => {
//     //something here
//   }

//   return (
//     <>
//       {questions.length <= 4 ? (
//         //display questions in order of helpfulness
//         questions.map((question) => (
//           <Question question={question} />
//         ))
//       ) : (
//         questions.slice(0, 4).map((question) => (
//           <>
//           <Question question={question} />
//           <button onClick={handleExpand}>Expand</button>
//           </>
//         ))
//       )}

// <div>
//   {/*make sure button shows when length is 0 */}
//   <button onClick={() => setModalState(true)}>ADD A QUESTION</button>

//   {modalState && (
//     <Modal isOpen={modalState}>
//       <div>
//         <h2>Ask Your Question</h2>
//         <h4>About the PRODUCT NAME HERE</h4>
//         <input type="text">Your Question: </input>
//         <input type="text" placeholder="Example: jackson11!" >Your Nickname</input>
//         <p>For privacy reasons, do not use your full name or email address</p>
//         <input type="text" placeholder="Why did you like the product or not?">Your email</input>

//         <button onClick={() => setModalState(false)}>Close</button>
//       </div>
//     </Modal>
//   )}
// </div>
//       </>
//     );
// };

// export default QuestionList;