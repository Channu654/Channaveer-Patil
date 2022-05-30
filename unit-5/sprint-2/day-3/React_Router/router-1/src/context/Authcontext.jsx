import React, { useState } from 'react';
// creating context
export const Authcontex = React.createContext();

const AuthcontexProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  return (
    <div>
      <Authcontex.Provider value={[isAuth, setisAuth]}>
        {children}
      </Authcontex.Provider>
    </div>
  );
};

export default AuthcontexProvider;
