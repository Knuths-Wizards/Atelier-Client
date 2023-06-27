import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../Main';

describe('Main', () => {
  it('should render a Search component', () => {
    render(<Main />);
    expect(screen.getByTestId('search-component')).toBeInTheDocument();
  });

  it('should render a QuestionList component if product questions exist', () => {
    render(<Main />);
    expect(screen.getByTestId('question-list-component')).toBeInTheDocument();
  });
});
