import { useState, useCallback } from "react";
import Header from "../components/Header";
function UseCallbackComponent() {

  const [count, setCount] = useState(0);

  const newFunction = useCallback(() => {
  }, [])

  return (
    <div>
      <Header newFunction={newFunction} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>Click here</button>
    </div>
  );
}

export default UseCallbackComponent;
