import './App.css'
import AutoIncrementCounter from './useEffect-demos/AutoIncrementCounter'
import OneTimeIncrementCounter from './useEffect-demos/OneTimeIncrementCounter'
import RenderCounter from './useRef-demos/RenderCounter'
import DOMElementReference from './useRef-demos/DOMElementReference'
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
      <RenderCounter />
      <DOMElementReference />
    </>
  )
}

export default App
