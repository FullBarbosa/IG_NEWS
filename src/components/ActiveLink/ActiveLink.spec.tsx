//testando componente ActiveLink
import { render, screen } from "@testing-library/react";
import { ActiveLink } from ".";

// mock do componente
jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("ActiveLink component", () => {
  // pega vários testes e coloca em uma categoria
  it("renders correctly", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("adds active class if the link as currently active", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );
    expect(screen.getByText("Home")).toHaveClass("active"); //verificando que a class está recebendo a class active
  });
});
