import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App tests", () => {
  it("should render the app correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Full Stack Challenge")).toBeDefined();
  });
});
