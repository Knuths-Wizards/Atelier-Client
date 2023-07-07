import React from "react";
import { render, screen } from "@testing-library/react";
import QA from "./QA.jsx";

describe("Main", () => {
  it("should render a Search component", () => {
    render(<QA />);
    expect(screen.getByTestId("search-component")).toBeInTheDocument();
  });

  it("should render a QuestionList component if product questions exist", () => {
    render(<QA />);
    expect(screen.getByTestId("question-list-component")).toBeInTheDocument();
  });
});
