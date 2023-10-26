import { ReactNode, useContext, createContext, useState } from "react";

type AppContextProviderProps = {
  children: ReactNode;
};

type AppContext = {
  count: number;
};

const AppContext = createContext({} as AppContext);

export function useGlobalContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }: AppContextProviderProps) {
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={{ count }}>{children}</AppContext.Provider>
  );
}
