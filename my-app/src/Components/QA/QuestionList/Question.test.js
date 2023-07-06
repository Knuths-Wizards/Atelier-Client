import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Question from './Question.jsx';

describe('Question', () => {
  const question = {
    id: 1,
    question_body: 'Sample question',
    question_helpfulness: 5,
    answers: [
      { id: 1, body: 'Answer 1', helpfulness: 10, answerer_name: 'User1' },
      { id: 2, body: 'Answer 2', helpfulness: 5, answerer_name: 'User2' },
      { id: 3, body: 'Answer 3', helpfulness: 3, answerer_name: 'User3' },
      { id: 4, body: 'Answer 4', helpfulness: 8, answerer_name: 'User4' },
      { id: 5, body: 'Answer 5', helpfulness: 2, answerer_name: 'User5' },
    ],
  };

  it('only renders two answers per question on load', () => {
    render(<Question question={question} />);
    const answerComponents = screen.getAllByTestId('answer-component');
    expect(answerComponents.length).toBeLessThanOrEqual(2);
  });

  it('renders more answers when the "Load More Answers" button is clicked', () => {
    render(<Question question={question} />);
    const initialAnswerComponents = screen.getAllByTestId('answer-component');
    const loadMoreButton = screen.getByText('Load More Answers');
    fireEvent.click(loadMoreButton);
    const updatedAnswerComponents = screen.getAllByTestId('answer-component');
    expect(updatedAnswerComponents.length).toBeGreaterThan(initialAnswerComponents.length);
  });

  it('answers are listed in order of helpfulness', () => {
    render(<Question question={question} />);
    const answerComponents = screen.getAllByTestId('answer-component');
    const displayedAnswers = answerComponents.map((component) =>
      component.textContent.trim()
    );

    const sortedAnswers = question.answers
      .sort((a, b) => b.helpfulness - a.helpfulness)
      .map((answer) => answer.body);

    expect(displayedAnswers).toEqual(sortedAnswers);
  });

  it('increments the helpfulness count by 1 when the "Helpful" button is clicked', () => {
    render(<Question question={question} />);
    const helpfulButton = screen.getByText(`Yes (${question.question_helpfulness})`);
    fireEvent.click(helpfulButton);
    expect(helpfulButton.textContent).toBe(`Yes (${question.question_helpfulness + 1})`);
  });

  it('answers from the seller appear at the top of the list', () => {
    render(<Question question={question} />);
    const answerComponents = screen.getAllByTestId('answer-component');
    const sellerAnswers = answerComponents.filter((component) =>
      component.textContent.includes('Seller')
    );
    expect(sellerAnswers).toHaveLength(1);
    expect(answerComponents[0]).toEqual(sellerAnswers[0]);
  });
});
