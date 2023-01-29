import React, { useEffect, useState } from "react";
import { useLoading } from "../../Context/LoadingContext";
import { useHeader } from "../../Context/HeaderContext";
import ApiManagerUsers from "../../Services/Users.service";
import ApiManagerRepos from "../../Services/Repos.service";
import ShowUserInfo from "./components/ListUsers";
import { BackToHome, Container } from "./styles";
import Loader from "../Loader";

const UserList = (): JSX.Element => {
  const InstanceRepoApi = ApiManagerRepos.getInstance();
  const InstanceUserApi = ApiManagerUsers.getInstance();
  const {
    textSearch: searchedUser,
    doTheSearch,
    setDotheSearch,
    setTextSearch,
    setBackToTopTen,
  } = useHeader();
  const { loading, setLoading } = useLoading();
  const [result, setResponse] = useState<any>();
  const [repos, setRepos] = useState<any>();

  useEffect(() => {
    const getUsers = () => {
      setLoading(true);
      InstanceUserApi.getUser(searchedUser).then((result) => {
        setResponse(result);
        getRepos(result?.data.login);
      });
    };

    if (searchedUser !== "" && doTheSearch) {
      getUsers();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doTheSearch]);

  const getRepos = (user: string | undefined) => {
    setLoading(true);
    InstanceRepoApi.getRepos(user)
      .then((result) => {
        setRepos(result);
      })
      .finally(() => {
        setLoading(false);
        setDotheSearch(false);
      });
  };

  const back = () => {
    setTextSearch("");
    setBackToTopTen(true);
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : result ? (
        <ShowUserInfo user={result} repos={repos} />
      ) : (
        <>
          <BackToHome onClick={() => back()}>Back</BackToHome>
          <h1>Nothing To show!</h1>
        </>
      )}
    </Container>
  );
};

export default UserList;
