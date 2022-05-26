import React, { createContext } from 'react';

export const Appcontext = createContext();

const AppcontextProvider = ({ children }) => {
    

  return (
    <Appcontext.Provider value={[]}>
      <div>{children}</div>
    </Appcontext.Provider>);
};

export default AppcontextProvider;
