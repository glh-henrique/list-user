import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render a App", () => {
    render(<App />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
