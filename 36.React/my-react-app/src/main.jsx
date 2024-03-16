import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

const fName = "AjwadG";
const lName = "Elgandouz";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Created by {`${fName} ${lName}`}.</h1>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
