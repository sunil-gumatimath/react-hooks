import { useState, useMemo } from "react";

function CubeCalculator() {

  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const cubenum = (num) => {
    console.log('Calculation done!')
    return Math.pow(num, 3)
  }

  const result = useMemo(() => {
    return cubenum(number);
  }, [number]);

  return (
    <div>
      <input type="number" value={number} onChange={(event) => { setNumber(event.target.value) }} />
      <h1>Cube of the number: {result}</h1>
      <button onClick={() => { setCounter(counter + 1) }}>Counter++</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}

export default CubeCalculator;
