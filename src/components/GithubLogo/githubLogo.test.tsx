import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import GithubLogo from ".";
import { screen } from "@testing-library/react";

describe("Github Logo", () => {
  it("should render a normal logo when size is default", () => {
    renderWithTheme(<GithubLogo />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      width: "11rem"
    });
  });

  it("should render a small logo when sm size passed", () => {
    renderWithTheme(<GithubLogo size="sm" />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      width: "7.5rem"
    });
  });

  it("should render a bigger logo when lg size passed", () => {
    renderWithTheme(<GithubLogo size="lg" />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      width: "20rem"
    });
  });

  it("should render #C4C4CC color by default", () => {
    renderWithTheme(<GithubLogo />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      color: "#C4C4CC"
    });
  });

  it("should render #FE5873 color when primary passed", () => {
    renderWithTheme(<GithubLogo color="red" />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      color: "#FE5873"
    });
  });

  it("should render #FFF color when panel passed", () => {
    renderWithTheme(<GithubLogo color="white" />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      color: "#FFF"
    });
  });

  it("should render #202024 color when cover passed", () => {
    renderWithTheme(<GithubLogo color="cover" />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      color: "#202024"
    });
  });
});
