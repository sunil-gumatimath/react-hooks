import './App.css'
import AutoIncrementCounter from './useEffect-demos/AutoIncrementCounter'
import OneTimeIncrementCounter from './useEffect-demos/OneTimeIncrementCounter'
import Example1 from './useRef-demos/Example1'
import Example2 from './useRef-demos/Example2'
import CarObjectUpdater from './useState-demos/CarObjectUpdater'
import FavoriteColorPicker from './useState-demos/FavoriteColorPicker'
import InteractiveCounter from './useState-demos/InteractiveCounter'
function App() {

  return (
    <>
      {/* <FavoriteColorPicker />
      <CarObjectUpdater />
      <InteractiveCounter />

      <AutoIncrementCounter />
      <OneTimeIncrementCounter />*/}
      <Example1 />
      <Example2 />
    </>
  )
}

export default App
