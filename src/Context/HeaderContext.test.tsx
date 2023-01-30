import React from "react";
import { render, screen } from "@testing-library/react";
import { HeaderProvider, useHeader } from "./HeaderContext";

const TestingComponent = () => {
  const {
    backToTopTen,
    doTheSearch,
    setBackToTopTen,
    setDotheSearch,
    setTextSearch,
    textSearch,
  } = useHeader();

  setBackToTopTen(false);
  setDotheSearch(true);
  setTextSearch("test");

  return (
    <>
      <p>{`backToTopTen: ${backToTopTen}`}</p>
      <p>{`doTheSearch: ${doTheSearch}`}</p>
      <p>{`test: ${textSearch}`}</p>
    </>
  );
};

describe("<HeaderProvider />", () => {
  it("provides expected HeaderProvider", () => {
    render(
      <HeaderProvider>
        <TestingComponent />
      </HeaderProvider>
    );
    expect(screen.getByText("backToTopTen: false")).toBeInTheDocument();
    expect(screen.getByText("doTheSearch: true")).toBeInTheDocument();
    expect(screen.getByText("test: test")).toBeInTheDocument();

  });
});
