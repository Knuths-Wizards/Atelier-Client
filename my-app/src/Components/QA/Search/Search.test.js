import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search.jsx';

describe('Search', () => {
  const questions = [
    { question_id: 1, question_body: 'Question 1' },
    { question_id: 2, question_body: 'Question 2' },
    { question_id: 3, question_body: 'Sample question' },
  ];

  it('should update the question list when typing into the input box', () => {
    render(<Search questions={questions} />);
    const input = screen.getByPlaceholderText('Have a question? Search for answers…');

    fireEvent.change(input, { target: { value: 'sample' } });

    const filteredQuestions = questions.filter((question) =>
      question.question_body.toLowerCase().includes('sample')
    );
    const filteredQuestionElements = screen.getAllByText(/sample/i);

    expect(filteredQuestionElements.length).toEqual(filteredQuestions.length);
  });
});
