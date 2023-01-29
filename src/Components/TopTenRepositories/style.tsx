import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: calc(100% - 20px);
  min-height: calc(100vh - 104px);
  background: #ccc;
  gap: 1em;
  padding: 10px;
  padding-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 21px;
  color: #000;
`;

export const ListTopRepositories = styled.div`
  width: 100%;
  max-width: 512px;
  background: white;
  display: flex;
  padding: 10px;
  box-shadow: 0.25rem 0.25rem 0.75rem rgb(0 0 0 / 0.1);

  .containerImg {
    margin-right: 10px;
    width: 100%;
    max-width: 100px;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }

  .containerText {
    text-align: left;

    p {
      font-size: 15px;
    }
  }
`;
