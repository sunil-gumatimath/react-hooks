import './App.css'

function App() {

  let color = 'Red'

  const changeColor = () => {
    color = 'Blue'
    console.log(color)
  }

  return (
    <>
      <h1>My favorite color is {color}</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App
