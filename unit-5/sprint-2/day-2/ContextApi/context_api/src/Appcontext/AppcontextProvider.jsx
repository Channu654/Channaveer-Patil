import React, { useState } from "react";


export const Appcontext = React.createContext();
const AppcontextProvider = () => {
    const [state , setState] = useState("light")

  return (
    <div>
      <Appcontext.Provider value={[]}>

          <h1>Context</h1>
      </Appcontext.Provider>
    </div>
  );
};

export default AppcontextProvider;
