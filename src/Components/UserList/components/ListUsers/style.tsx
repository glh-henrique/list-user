import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background: #fff;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 0.25rem 0.25rem 0.75rem rgb(0 0 0 / 0.1);
`;

export const BackToHome = styled.button`
  width: 150px;
  margin-bottom: 20px;
`

export const ContainerPerfil = styled.div`
  display: flex;
`;

export const Picture = styled.img`
  width: 120px;
`;

export const ContainerUserInfo = styled.div`
  margin-right: 10px;

  &.dataUsers {
    margin: 0;

    p {
      margin: 0;
    }
  }
`;

export const ContainerRepos = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }
`;


