import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer"
import userEvent from "@testing-library/user-event"

it ("renders without crashing", () => {
  const rendered = renderer.create(<App />.toJSON();
  expect(rendered).toMatchSnapshot();
  )
}):

it("displays 'Insufficient funds' when transfer value doesn't meet requirement"), () => {
  render (<App /> );

  const balance = screen.getByLabelText(/balance/i);
  const input = screen.getByAltText(/input/i);
  const button = screen.getByRole(/button/i);

  userEvent.type(input, 150)
  userEvent.click(button)

  expect(setMessage). toBe("Insufficient funds")

}




