import styled from "styled-components";

export const ContainerPagination = styled.div`
  background: transparent;
  padding-bottom: 20px;

  ul {
    list-style: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1px;
    background-color: #ccc;
    padding: 5px;
    font-weight: semi-bold;
    margin-bottom: 0;
  }

  ul li {
    cursor: pointer;
    padding: 15px;
    text-align: center;
    transition: all 0.3s;
  }

  .dots {
    cursor: default;
  }
  span {
    display: block;
  }

  ul .active,
  ul .num:hover {
    background-color: #282c34;
    color: white;
  }
`;
