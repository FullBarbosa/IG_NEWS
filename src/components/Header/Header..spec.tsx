//testando componente Header
import { render, screen } from "@testing-library/react";
import { Header } from ".";

// mock do componente | Devido ao ActiveLink estiver dentro do header é importante o mock ainda está sendo importado
jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
}); //mocakndo useSession

describe("Header component", () => {
  // pega vários testes e coloca em uma categoria
  it("renders correctly", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});
