//testando componente Header
import { render, screen } from "@testing-library/react";
import { SignInButton } from ".";
import { useSession } from "next-auth/client";
import { mocked } from "ts-jest/utils";

// validando button para verificar se o mesmo está validando o usuário já logado no github

jest.mock("next-auth/client");

describe("SignInButton component", () => {
  // verificando o componente de button se o mesmo está rederizando de forma correta
  it("renders correctly when user is authenticated", () => {
    const useSessionMocked = mocked(useSession); // verificar se o mesmo está rederizando corretamente

    useSessionMocked.mockReturnValueOnce([null, false]);
    render(<SignInButton />);
    expect(screen.getByText("Sign In with Github")).toBeInTheDocument();
  });

  it("renders correctly when user is authenticated", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([
      //devido a complexedidade da logica, para validar se o ususario está com nome logado no botão é utilizado tal logica
      {
        user: { name: "John Doe", email: "john.doe@example.com" },
        expires: "fake-expires",
      },
      false,
    ]);
    render(<SignInButton />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
