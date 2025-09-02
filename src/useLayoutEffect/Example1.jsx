import { useEffect, useLayoutEffect } from "react";

function Example1() {

  useEffect(() => {
    console.log('Message from useEffect')
  }, [])

  useLayoutEffect(() => {
    console.log('Message from useLayoutEffect')
  }, [])

  return (
    <div>
      <h2>Test Message</h2>
      {/* {
        Array(40000).fill('').map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}*/}
    </div>
  );
}

export default Example1
