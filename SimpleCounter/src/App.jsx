import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addCounter = () =>{
    setCount(count + 1)
  }

  const subtractCounter = () =>{
    setCount(count - 1)
  }


  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={addCounter} disabled={count >=20}>Add</button>
        <button onClick={subtractCounter} disabled={count <= 0}>Subtract</button>
      </div>

    </>
  )
}

export default App
