import { useEffect, useState } from "react";

function OneTimeIncrementCounter() {

  const [count, setCount] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 2000)
  }, [])

  return (
    <div>
      <h1>i've rendered {count} times</h1>
    </div>
  );
}

export default OneTimeIncrementCounter;
