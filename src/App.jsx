import './App.css'
import { useState } from 'react'
function App() {

  // Simple useState Example
  const [color, setColor] = useState("Red");

  const changeColor = () => {
    setColor("Blue")
  }

  return (
    <>
      <h1>My favorite color is {color}</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App
