import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/appPropsChildren.jsx';
import reportWebVitals from './reportWebVitals';
// import AppPassFn from './components/appPropsFn.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
