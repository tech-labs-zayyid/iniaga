"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  packageId: string;
  setPackageId: (packageId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [packageId, setPackageId] = useState<string>("");

  return (
    <AppContext.Provider value={{ packageId, setPackageId }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
