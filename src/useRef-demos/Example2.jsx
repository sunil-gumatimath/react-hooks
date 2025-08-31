import { useRef } from "react";

function Example2() {

  const inputElement = useRef();

  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background = "Blue"
  }

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default Example2;
