import React from 'react'
import ReactDOM from 'react-dom/client'
import views from './App.jsx'
import './index.css'

const App = views[0]
const Something = views[1]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Something />
  </React.StrictMode>,
)
ReactDOM
