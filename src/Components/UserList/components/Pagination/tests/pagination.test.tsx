import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Pagination from "..";

const paginate = jest.fn();

describe("ListUser", () => {
  it("should render a ListUser", () => {
    render(
      <Pagination itemsTotal={100} paginate={paginate} usersPerPage={10} />
    );

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  //create test for onclick event
  it("should call paginate function", () => {
    render(
      <Pagination itemsTotal={100} paginate={paginate} usersPerPage={10} />
    );
    
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      const btnPaginate = screen.getByTestId("btn-paginate");
      btnPaginate.click();
      expect(paginate).toHaveBeenCalled();
    });
  });
});
