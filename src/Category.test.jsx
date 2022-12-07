import { render } from "@testing-library/react";
import Category from "./Category";

test("it should render category", () => {
  const wrapper = render(<Category categoryText="foo" />);
  expect(wrapper.getByText("foo")).toBeInTheDocument();
});
