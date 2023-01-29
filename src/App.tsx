import React from "react";
import TopTenRepositories from "./Components/TopTenRepositories";
import { ContainerResult } from "./Style";
import Header from "./Components/Header";
import UserList from "./Components/UserList";
import { useHeader } from "./Context/HeaderContext";

function App() {
  const { backToTopTen } = useHeader();

  return (
    <div className="App">
      <Header />
      <ContainerResult>
       {backToTopTen ? <TopTenRepositories /> : <UserList />}
      </ContainerResult>
    </div>
  );
}

export default App;
