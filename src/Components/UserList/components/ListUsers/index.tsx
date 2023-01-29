import React, { useState } from "react";
import { useHeader } from "../../../../Context/HeaderContext";
import {
  Repositories,
  ResponseRepositories,
  ResponseSearchUser,
} from "../../../../Interfaces";
import Pagination from "../Pagination";
import {
  BackToHome,
  Container,
  ContainerPerfil,
  ContainerRepos,
  Picture,
} from "./style";

const ShowUserInfo = ({
  user,
  repos,
}: {
  user: ResponseSearchUser;
  repos: ResponseRepositories;
}) => {
  const { setBackToTopTen, setTextSearch } = useHeader();
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.data.slice(indexOfFirstRepo, indexOfLastRepo)

  const back = () => {
    setTextSearch("");
    setBackToTopTen(true);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <BackToHome onClick={() => back()}>Back</BackToHome>
      <ContainerPerfil>
        <div>
          <Picture
            src={user.data.avatar_url}
            alt={`${user.data.login} avatar`}
          />
        </div>

        <div className="dataUsers">
          <p>Perfil name: {user.data.login}</p>
          <p>Public Repos.: {repos.data.length}</p>
          <p>
            URL: <a href={user.data.html_url}>{user.data.html_url}</a>
          </p>
        </div>
      </ContainerPerfil>
      <hr />
      <ContainerRepos>
        <p>List Repos.</p>
        <div>
          {currentRepos.map((repo: Repositories) => (
            <a href={repo.html_url}>{repo.full_name}</a>
          ))}
        </div>
        {repos.data.length > 10 && (
          <Pagination
            itemsTotal={repos.data.length}
            usersPerPage={10}
            paginate={paginate}
          />
        )}
      </ContainerRepos>
    </Container>
  );
};

export default ShowUserInfo;
