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

  it("should render #FFF color by default", () => {
    renderWithTheme(<GithubLogo />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      color: "#FFF"
    });
  });

  it("should render #FE5873 color when primary passed", () => {
    renderWithTheme(<GithubLogo color="primary" />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      color: "#FE5873"
    });
  });

  it("should render #393656 color when panel passed", () => {
    renderWithTheme(<GithubLogo color="panel" />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      color: "#393656"
    });
  });

  it("should render #343150 color when cover passed", () => {
    renderWithTheme(<GithubLogo color="cover" />);

    expect(screen.getByLabelText("Github Logo").parentElement).toHaveStyle({
      color: "#343150"
    });
  });
});
