import { AppContext } from "./AppContext.js";

const ContextProvider = (props) => {

  const phone = "+91 1234567890"
  const name = "Ted"

  return (
    <AppContext.Provider value={{phone,name}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider;
