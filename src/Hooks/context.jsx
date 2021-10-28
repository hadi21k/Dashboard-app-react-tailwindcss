import { createContext, useContext, useState } from "react";
const ShownContext = createContext();

export const useShownContext = () => {
  return useContext(ShownContext);
};

export const ShownContextProvider = ({ children }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <ShownContext.Provider value={{ isShown, setIsShown }}>
      {children}
    </ShownContext.Provider>
  );
};
