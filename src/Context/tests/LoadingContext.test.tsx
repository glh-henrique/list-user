import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingProvider, useLoading } from "../LoadingContext";

const TestingComponent = () => {
  const {
    loading,
    setLoading,
  } = useLoading();

  setLoading(false);

  return (
    <>
      <p>{`loading: ${loading}`}</p>
    </>
  );
};

describe("<HeaderProvider />", () => {
  it("provides expected HeaderProvider", () => {
    render(
      <LoadingProvider>
        <TestingComponent />
      </LoadingProvider>
    );
    expect(screen.getByText("loading: false")).toBeInTheDocument();

  });
});
