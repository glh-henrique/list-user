import React, { useEffect, useState } from "react";
import { useLoading } from "../../Context/LoadingContext";
import { Repositories } from "../../Interfaces";

import ApiManager from "../../Services/Users.service";
import Loader from "../Loader";
import { Container, ContainerImg, ContainerText, ListTopRepositories, Title } from "./style";

const TopTenRepositories = (): JSX.Element => {
  const { loading, setLoading } = useLoading();
  const [responseRequest, setResponseRequest] = useState<Repositories[]>();

  useEffect(() => {
    const getRepos = () => {
      setLoading(true);

      ApiManager.getInstance()
        .getTopTenRepos()
        .then((result) => {
          setResponseRequest(result);
        })
        .finally(() => setLoading(false));

      setLoading(true);
    };
    getRepos();
  }, [setLoading]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Title>Top 10 GitHub Repos</Title>
          {responseRequest?.map((repository, index) => (
            <ListTopRepositories key={index}>
              <ContainerImg id="ImgRepository" className="containerImg">
                <img
                  src={repository.owner.avatar_url}
                  alt={`${repository.full_name} avatar`}
                />
              </ContainerImg>
              <ContainerText className="containerText">
                <a
                  href={repository.owner.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {repository.full_name}
                </a>
                <p>{repository.description}</p>
              </ContainerText>
            </ListTopRepositories>
          ))}
        </>
      )}
    </Container>
  );
};

export default TopTenRepositories;
