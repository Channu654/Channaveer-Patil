import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
//import { AuthContextProvider } from "./context/AuthContext";
import { store } from "./redux/store";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
   {/* <AuthContextProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
 {/* //   </AuthContextProvider> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
