import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import TopTenRepositories from "./";

describe("TopTenRepositories", () => {
  it("should render a TopTenRepositories", () => {
    render(
        <TopTenRepositories />
    );

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      expect(screen.getByText("Top Ten Repositories")).toBeInTheDocument();
    });
  });
});
