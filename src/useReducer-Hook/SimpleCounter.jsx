import React, {useReducer } from 'react'

const SimpleCounter = () => {
  
    const initialState = {count : 0}
    
    const reducer = (state, action) => {
        switch(action.type){
            case 'increase' : {
                return {count : state.count + 1}
            }
            case 'decrease' : {
                return {count : state.count - 1}
            }
            case 'input' : {
                return { count : action.payload}
            }
            case 'zero' : {
                return { count : state.count = 0}
            }
            default : {
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: 'decrease'})}>Decrement</button>
        <button onClick={()=> dispatch({type: 'zero'})}>Reset</button>
        <button onClick={() => dispatch({type: 'increase'})}>Increment</button> <br />
        <input value={state.count}
        onChange={(event)=>{dispatch({type : 'input', payload:Number(event.target.value)})}} 
            type="number" />
    </div>
  )
}

export default SimpleCounter