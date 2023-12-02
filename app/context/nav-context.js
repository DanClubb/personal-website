"use client";

import { useState, useCallback, useContext, createContext } from "react";

const NavContext = createContext();

export const NavContextProvider = ({ ...props }) => {
  const [currentSection, setCurrentSection] = useState({
    hero: false,
    experience: false,
    projects: false,
    contact: false,
  });

  const updateCurrentSection = useCallback((currentIntersector) => {
    setCurrentSection(currentIntersector);
  }, []);

  return (
    <NavContext.Provider
      value={{
        currentSection,
        updateCurrentSection,
      }}
      {...props}
    />
  );
};

export const useNav = () => useContext(NavContext);

export default NavContext;
