import { useState, useContext, createContext, useEffect } from "react";

const homeContext = createContext();

export const useHomeContext = () => useContext(homeContext);

export const HomeProvider = ({ children }) => {
  const [planId, setPlanId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <homeContext.Provider
      value={{
        planId,
        setPlanId,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </homeContext.Provider>
  );
};
