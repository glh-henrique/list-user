import React from "react";
import { createContext, useContext, useState } from "react";

const HeaderContext = createContext<{
  textSearch: string;
  setTextSearch: React.Dispatch<React.SetStateAction<string>>;
  doTheSearch: boolean;
  setDotheSearch: React.Dispatch<React.SetStateAction<boolean>>;
  backToTopTen: boolean;
  setBackToTopTen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  textSearch: "",
  setTextSearch: () => {},
  doTheSearch: false,
  setDotheSearch: () => {},
  backToTopTen: true,
  setBackToTopTen: () => {},
});

export function HeaderProvider({ children }: { children: any }) {
  const [textSearch, setTextSearch] = useState("");
  const [doTheSearch, setDotheSearch] = useState(false);
  const [backToTopTen, setBackToTopTen] = useState(true);

  const value = {
    textSearch,
    setTextSearch,
    doTheSearch,
    setDotheSearch,
    backToTopTen,
    setBackToTopTen,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("useLoading must be used within useHeader");
  }
  return context;
}
