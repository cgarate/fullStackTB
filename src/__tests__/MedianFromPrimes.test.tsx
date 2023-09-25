import { fireEvent, render, screen, } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import MedianFromPrimes from "../features/getMedianFromPrimeNumbers/MedianFromPrimes";
import "@testing-library/jest-dom";
import InputLimit from "../features/getMedianFromPrimeNumbers/InputLimit";

describe("MedianFromPrimes feature tests", () => {
  it("should have a disabled button", () => {
    const { getByRole } = render(<MedianFromPrimes />);
    const submitButton = getByRole("button");
    expect(submitButton).toHaveAttribute("disabled");
  });

  it("should enable the button once the input has a value", () => {
    const { getByRole } = render(<MedianFromPrimes />);
    const submitButton = getByRole("button");
    const input = getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 1234 } });
    expect(submitButton.getAttribute("disabled")).toBeNull();
  });

  it("should call handlers for onClick and onChange", async () => {
    const mockOnClick = jest.fn();
    const mockonChange = jest.fn();

    render(
      <InputLimit
        buttonOnClick={mockOnClick}
        inputOnChange={mockonChange}
        inputValue="1234"
      />,
    );
    const submitButton = screen.getByRole("button");
    const input = screen.getByRole("spinbutton");
    await userEvent.type(input, "12")
    expect(mockonChange).toBeCalledTimes(2);
    await userEvent.click(submitButton);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
