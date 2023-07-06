import React, { useState, useEffect } from 'react';

const Search = ({ setQuestionData, questionData, filterData, setFilterData }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterSearch = () => {
    if (searchTerm.length >= 3) {
      const filteredQuestions = questionData.filter((question) =>
        question.question_body.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterData(filteredQuestions);
    } else {
      setFilterData(questionData);
    }
  }

  useEffect(() => {
    filterSearch()
  }, [searchTerm, questionData])

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
    </form>
  );
};

export default Search;
