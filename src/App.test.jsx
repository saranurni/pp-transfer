import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("displays not enough funds when transfer value doesn't meet requirement", () => {
  const balance = 100;
  const transferAmount = 150;
  const expectedTransferMsg = "Not enough funds.";
  const expectedBalanceMsg = `Current Balance:${balance}`;

  render(<App />);
  const input = screen.getByLabelText(/transfer amount:/i);
  userEvent.type(input, transferAmount);
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedBalanceMsg)).toBeInTheDocument();
  expect(screen.getByText(expectedTransferMsg)).toBeInTheDocument();
});

it("prevents negative balances from occurring", () => {
  const transferAmount = 1000;
  const expectedMsg = "You can't transfer more than ${balance}";

  render(<App />);
  const input = screen.getByLabelText(/input/i);
  userEvent.type(input, transferAmount);
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedMsg)).toBe();
});
