import React, { useEffect, useState } from "react";
import { ContainerPagination } from "./style";

const Pagination = ({
  usersPerPage,
  itemsTotal,
  paginate,
}: {
  usersPerPage: number;
  itemsTotal: number;
  paginate: any;
}): JSX.Element => {
  const [pageNumber, setPageNumber] = useState<number[]>([]);

  useEffect(() => {
    const configPagination = () => {
      let totalItens = itemsTotal > 1000 ? 1000 : itemsTotal;
      let numberPage: number[] = [];

      for (let i = 1; i <= Math.ceil(totalItens / usersPerPage); i++) {
        numberPage.push(i);
      }
      setPageNumber(numberPage);
    };

    configPagination();
  }, [itemsTotal, usersPerPage]);

  return (
    <ContainerPagination>
      <ul>
        {pageNumber.map((number: any) => (
          <li key={number} id="btn-paginate" className="num" onClick={() => paginate(number)}>
            <span key={number}>{number}</span>
          </li>
        ))}
      </ul>
    </ContainerPagination>
  );
};

export default Pagination;
