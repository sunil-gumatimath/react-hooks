import { useState } from "react";

function FavoriteColorPicker() {

  const [color, setColor] = useState("Red")

  const changeColor = () => {
    setColor("Blue")
  }

  return (
    <div>
      <h1>My favorite color is {color}</h1>
      <button onClick={changeColor}>Blue</button>
    </div>
  );
}

export default FavoriteColorPicker;
