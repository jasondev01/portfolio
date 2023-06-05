import ReactDOM from "react-dom";
import React from "react";
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(<App />, document.querySelector('#root'));
root.render (
    <React.StrictMode>
      <App />   
    </React.StrictMode>
)