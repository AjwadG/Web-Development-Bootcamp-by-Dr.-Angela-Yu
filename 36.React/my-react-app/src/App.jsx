import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const time = new Date().getHours();

function getGreeting(timeOfDay) {
  if (timeOfDay < 12) {
    return "Good morning";
  } else if (timeOfDay < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

function getStyle(timeOfDay) {
  if (timeOfDay < 12) {
    return { color: "red" };
  } else if (timeOfDay < 18) {
    return { color: "green" };
  } else {
    return { color: "blue" };
  }
}

const fName = 'Ajwad'
const lName = 'Elgandouz'

const year = new Date().getFullYear()

function water() {
  return (<>
    <h1 className="heading" style={getStyle(time)}>
    {getGreeting(time)}
  </h1>
  </>)

}

const views = [App, water]

export default views;

