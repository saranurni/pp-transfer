import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

it("calls submit handler whenever the form is submitted", () => {
  const handleSubmit = jest.fn((event) => {
    event.preventDefault();
  });

  render(<Form handleSubmit={handleSubmit} />);
  const submitBtn = screen.getByRole("button");

  userEvent.click(submitBtn);

  expect(handleSubmit).toHaveBeenCalled();
});
