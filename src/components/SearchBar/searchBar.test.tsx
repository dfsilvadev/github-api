import { screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import SearchBar from ".";

describe("Searches", () => {
  it("should render a form", () => {
    renderWithTheme(<SearchBar />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("should render with placeholder when passed", () => {
    renderWithTheme(<SearchBar placeholder="Busque um username do github" />);

    expect(
      screen.getByPlaceholderText("Busque um username do github")
    ).toBeInTheDocument();
  });

  it("should render an icon", () => {
    renderWithTheme(<SearchBar hasIcon />);

    expect(screen.getByLabelText("Search icon")).toBeInTheDocument();
  });
});
