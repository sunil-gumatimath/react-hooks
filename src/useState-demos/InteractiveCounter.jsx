import { useState } from "react";

function InteractiveCounter() {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count => count + 1)
  }

  const decrementCount = () => {
    setCount(count => count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default InteractiveCounter;
