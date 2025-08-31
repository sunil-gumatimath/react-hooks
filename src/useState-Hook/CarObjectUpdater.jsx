import { useState } from "react";

function CarObjectUpdater() {

  const [car, setCar] = useState({
    brand: "ferrari",
    model: "Roma",
    year: 2023,
    color: 'red'
  })

  const changeCar = () => {
    setCar((prev) => {
      return { ...prev, color: 'Blue' }
    })
  }

  return (
    <div>
      <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeCar}>Blue</button>
    </div>
  )
}

export default CarObjectUpdater;
