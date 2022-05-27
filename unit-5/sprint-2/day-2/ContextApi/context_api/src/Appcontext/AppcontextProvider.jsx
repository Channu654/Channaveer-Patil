import React, { useState } from 'react';
//1. creatingcontext
export const Appcontext = React.createContext();

//2. customise component fucntion
export const AppcontextProvider = ({ children }) => {
  console.log('children:', children);
  //5. state
  const [state, setState] = useState('light');
  //6.toggle theme
  const toggleTheme = () => {
      //7. if state is === light true and its dark if not its light
    state === 'light' ? setState('dark') : setState('light');
  };
  return (
    <div>
      {/* 3 To provide appcontext to component by writting .Provder */}
      <Appcontext.Provider value={[toggleTheme, state]}>
        <h1> Context1 </h1>
        {children}
      </Appcontext.Provider>
    </div>
  );
};
