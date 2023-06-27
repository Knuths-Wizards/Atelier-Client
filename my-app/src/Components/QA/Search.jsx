import React, { useState } from 'react';

const Search = ({ questions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length >= 3) {
      const filteredQuestions = questions.filter((question) =>
        question.question_body.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredQuestions);
    } else {
      setResults([]);
    }
  };

  //rank results using sort

  const style = {
    width: '80%',
    padding: '8px',
    boxSizing: 'border-box',
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Have a question? Search for answers…"
        value={searchTerm}
        onChange={handleChange}
        style={style}
      />
      {results.map((question) => (
        <div key={question.question_id}>{question.question_body}</div>
      ))}
    </form>
  );
};

export default Search;
