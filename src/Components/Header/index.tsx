import React from "react";
import { useHeader } from "../../Context/HeaderContext";
import { AppHeader, ContainerSearch, Title } from "./style";

const Header = (): JSX.Element => {
  const { setTextSearch, textSearch, setDotheSearch, setBackToTopTen } =
    useHeader();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTextSearch(event.currentTarget.value);
  };

  const search = () => {
    if (textSearch === "") {
      setBackToTopTen(true);
    } else {
      setBackToTopTen(false);
      setDotheSearch(true);
    }
  };

  const back = () => {
    setTextSearch("");
    setBackToTopTen(true)
  }

  return (
    <AppHeader>
      <Title onClick={() => back() }>Search Repos.</Title>
      <ContainerSearch>
        <input
          type="text"
          id="user"
          name="user"
          onChange={handleChange}
          value={textSearch}
        />
        <button onClick={() => search()}>Search</button>
      </ContainerSearch>
    </AppHeader>
  );
};

export default Header;
