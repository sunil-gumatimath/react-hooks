import React, { useContext } from 'react'
import { AppContext } from '../useContext-Hook/AppContext.js'

const Contact = () => {

    const { phone } = useContext(AppContext);

  return (
    <div>
        <h1>Contact</h1>
        <h3>Phone: {phone}</h3>
    </div>
  )
}

export default Contact