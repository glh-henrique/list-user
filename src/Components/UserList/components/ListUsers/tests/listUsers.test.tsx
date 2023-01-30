import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ListUser from "..";
import { ReposMock, UserMock } from "./mocks";

describe("ListUser", () => {
  it("should render a ListUser", () => {
    render(<ListUser user={UserMock} repos={ReposMock} />);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      expect(screen.getByText("Perfil name:")).toBeInTheDocument();
    });
  });
});
