import {React, createContext, useState } from 'react';

export const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [selectedShow, setSelectedShow] = useState({});

  return (
    <ShowContext.Provider value={{ selectedShow, setSelectedShow }}>
      {children}
    </ShowContext.Provider>
  );
};