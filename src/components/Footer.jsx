import React, { useContext } from 'react'
import { AppContext } from '../useContext-Hook/AppContext.js'

const Footer = () => {


    const {phone,name} = useContext(AppContext);
    
  return (
    <div>
        <h1>Footer</h1>
        <h3>Phone: {phone}</h3>
        <h3>Name: {name}</h3>
    </div>
  )
}

export default Footer