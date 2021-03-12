import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";

it("checkButtonRender", () => {
  const { queryByDisplayValue } = render(<Home />);
  const button = queryByDisplayValue("Get Quote");
  expect(button).toBeTruthy();
});

describe("checkInputValue", () => {
  test("amount input", async () => {
    const { queryByPlaceholderText } = render(<Home />);
    const input = queryByPlaceholderText("Amount");
    fireEvent.change(input, {
      target: {
        value: 123,
      },
    });
    expect(input).toHaveValue(123);
  });
});
