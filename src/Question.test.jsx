import { render } from "@testing-library/react";
import Question from "./Question";

test("should render question", () => {
  const wrapper = render(
    <Question
      questionText="In which state was Dwayne Johnson (The Rock), born?"
      questionAnswer="California"
    />
  );
});

test("should show answer", () => {});
