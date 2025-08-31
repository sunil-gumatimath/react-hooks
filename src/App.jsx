import './App.css'
import AutoIncrementCounter from './useEffect-Hook/AutoIncrementCounter'
import OneTimeIncrementCounter from './useEffect-Hook/OneTimeIncrementCounter'
import RenderCounter from './useRef-Hook/RenderCounter'
import DOMElementReference from './useRef-Hook/DOMElementReference'
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
