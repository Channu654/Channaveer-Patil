import React, { createContext, useState } from 'react';

//1. creating context here why?? i need to need to send props to all components from here
export const Appcontext = createContext();



const AppContextProvider = ({ children }) => {

  const [state, setState] = useState('light');

  const ToggleTheme = () => {
    state === 'light' ? setState('dark') : setState('light');
  };
  return (
    //2. wrapp the component by Provider
    <Appcontext.Provider value={[state, ToggleTheme]}>
      <div>{children}</div>
    </Appcontext.Provider>
  );
};

export default AppContextProvider;
