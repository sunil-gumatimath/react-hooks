import { useState, useEffect } from "react";

function ContinuousIncrementCounter() {

  const [count, setCount] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 2000)
  }, [count])

  return (
    <div>
      <h1>i've rendered {count} times</h1>
    </div>
  );
}

export default ContinuousIncrementCounter;
