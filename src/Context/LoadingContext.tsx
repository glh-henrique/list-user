import React from "react";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext<{
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  loading: true,
  setLoading: () => {},
});

export function LoadingProvider({ children }: { children: any }) {
  const [loading, setLoading] = useState(true);
  const value = { loading, setLoading };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}
