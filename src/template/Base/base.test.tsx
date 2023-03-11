import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Base from ".";

describe("Base", () => {
  it("should render without error", () => {
    const { container } = renderWithTheme(<Base />);

    expect(screen.getByLabelText("Main")).toHaveStyle({
      width: "100%",
      height: "100vh"
    });

    expect(screen.getByLabelText("Content")).toHaveStyle({
      width: "100%",
      "max-width": "45rem",
      height: "100%",
      margin: "0 auto",
      padding: "2.5rem 1rem"
    });

    expect(container).toMatchSnapshot();
  });
});
