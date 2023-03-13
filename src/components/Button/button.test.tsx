import { screen } from "@testing-library/react";
import { ShoppingCart } from "phosphor-react";

import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Button from ".";

describe("<Button />", () => {
  it("should render the medium button by default", () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "2.6875rem",
      padding: "0.5rem 2rem",
      "font-size": "0.875rem"
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the small button when size small is passed", () => {
    renderWithTheme(<Button size="sm">Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "2rem",
      "font-size": "0.75rem"
    });
  });

  it("should render the large button when size large is passed", () => {
    renderWithTheme(<Button size="lg">Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "3.125rem",
      padding: "0.5rem 2.5rem",
      "font-size": "1rem"
    });
  });

  it("should render the full width button when fullWidth option is passed", () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%"
    });
  });

  it("should render an icon", () => {
    renderWithTheme(
      <Button icon={<ShoppingCart data-testid="icon" />}>Buy now</Button>
    );
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render a minimal", async () => {
    renderWithTheme(
      <Button icon={<ShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    );

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      color: "#FE5873",
      "font-weight": "700"
    });
  });

  it("should render a disabled Button", () => {
    renderWithTheme(<Button disabled>Buy now</Button>);

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyleRule(
      "cursor",
      "not-allowed",
      {
        modifier: ":disabled"
      }
    );
  });

  it("should render button as a link", () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    );

    expect(screen.getByRole("link", { name: /buy now/i })).toHaveAttribute(
      "href",
      "/link"
    );
  });
});
