import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppcontextProvider } from './Appcontext/AppcontextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/*4  To provide values to all App.jsx now app.jsx is allows props from appcontext */}
    <AppcontextProvider>
      <App />
    </AppcontextProvider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();