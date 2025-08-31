import { useEffect, useState } from "react";

function CounterLoaded() {

  const [count, setCounter] = useState(0)

  // Example 1 without dependency

  useEffect(() => {
    setTimeout(() => {
      setCounter(count => count + 1)
    }, 2000)
  })

  return (
    <div>
      <h1>i've rendered {count} times</h1>
    </div>
  );
}

export default CounterLoaded;
