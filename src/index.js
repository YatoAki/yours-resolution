import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from "./RouteSwitch";
import { BrowserRouter } from 'react-router-dom';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <div>
          <h1>Yours Resolution</h1>
          <div>
            <a href="home">Home</a>
            <a href="create">Create</a>
            <a href="view">View</a>
            <a href="login">Login</a>
          </div>
        </div>
      </header>
      <RouteSwitch />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

