import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuestionList from './QuestionList';

describe('QuestionList', () => {
  const questions = [
    { id: 1, text: 'Question 1', helpfulness: 5 },
    { id: 2, text: 'Question 2', helpfulness: 3 },
    { id: 3, text: 'Question 3', helpfulness: 2 },
    { id: 4, text: 'Question 4', helpfulness: 1 },
    { id: 5, text: 'Question 5', helpfulness: 4 },
    { id: 6, text: 'Question 6', helpfulness: 2 },
  ];

  it('renders the question component', () => {
    render(<QuestionList questions={questions} />);
    const questionComponents = screen.getAllByTestId('question-component');
    expect(questionComponents.length).toBe(questions.length);
  });

  it('should render no more than 4 product questions on load', () => {
    render(<QuestionList questions={questions} />);
    const questionComponents = screen.getAllByTestId('question-component');
    expect(questionComponents.length).toBeLessThanOrEqual(4);
  });

  it('questions appear in order of helpfulness', () => {
    render(<QuestionList questions={questions} />);
    const questionComponents = screen.getAllByTestId('question-component');
    const displayedQuestions = questionComponents.map((component) =>
      component.textContent.trim()
    );

    const sortedQuestions = questions
      .sort((a, b) => b.helpfulness - a.helpfulness)
      .map((question) => question.text);

    expect(displayedQuestions).toEqual(sortedQuestions);
  });

  it('if there are more than 4 questions, more questions appear when the "More Answered Questions" button is clicked', () => {
    render(<QuestionList questions={questions} />);
    const initialQuestionComponents = screen.getAllByTestId('question-component');
    const moreQuestionsButton = screen.getByText('More Answered Questions');
    fireEvent.click(moreQuestionsButton);
    const updatedQuestionComponents = screen.getAllByTestId('question-component');

    expect(updatedQuestionComponents.length).toBeGreaterThan(initialQuestionComponents.length);
  });
});
