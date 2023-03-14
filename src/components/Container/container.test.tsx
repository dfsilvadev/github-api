import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Container from ".";
import { screen } from "@testing-library/react";

describe("Container", () => {
  it("should render with width: 100% by default", () => {
    renderWithTheme(
      <Container size="fluid">
        <h1>Container</h1>
      </Container>
    );

    expect(
      screen.getByRole("heading", { name: "Container" }).parentElement
    ).toHaveStyle({
      width: "100%"
    });
  });

  it("should render with max-width: 45rem when size is fixed", () => {
    renderWithTheme(
      <Container size="fixed">
        <h1>Container</h1>
      </Container>
    );

    expect(
      screen.getByRole("heading", { name: "Container" }).parentElement
    ).toHaveStyle({
      "max-width": "45rem"
    });
  });

  it("should render with content center when passed", () => {
    renderWithTheme(
      <Container size="fixed" contentCenter>
        <h1>Container</h1>
      </Container>
    );

    expect(
      screen.getByRole("heading", { name: "Container" }).parentElement
    ).toHaveStyle({
      display: "flex",
      "align-items": "center",
      "justify-content": "center"
    });
  });
  it("should render with row direction by default", () => {
    renderWithTheme(
      <Container size="fixed" contentCenter direction="row">
        <h1>Container</h1>
      </Container>
    );

    expect(
      screen.getByRole("heading", { name: "Container" }).parentElement
    ).toHaveStyle({
      "flex-direction": "row"
    });
  });

  it("should render with colum direction when passed", () => {
    const { container } = renderWithTheme(
      <Container size="fixed" contentCenter direction="column">
        <h1>Container</h1>
      </Container>
    );

    expect(
      screen.getByRole("heading", { name: "Container" }).parentElement
    ).toHaveStyle({
      "flex-direction": "column"
    });

    expect(container).toMatchSnapshot();
  });
});
