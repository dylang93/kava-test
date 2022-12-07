import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Quiz Game!");
  expect(linkElement).toBeInTheDocument();
});

test("should get questions json data", () => {});

test("should handle questions json request with bad response", () => {});
