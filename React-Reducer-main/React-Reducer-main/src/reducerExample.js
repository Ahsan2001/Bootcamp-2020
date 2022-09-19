// the advanced version of useState is useReducer it handle complicated state management 

// useReducer take two arguements first is reducer funtion where we write login in switch cases
// the other is intial state 

// useReducer Return new state every time

// useReducer are called pure funtion 

// pure function is the function which return zero side effects and 
// return always a argument which is passed

import React, { useReducer } from 'react'
const Example = () => {
 
let intitialState = { count: 0 }

const myReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 } 
        case "decrement":
            return { count: state.count - 1 } 
        default:
            return state
    }
}

const [state, dispatch] = useReducer(myReducer, intitialState)
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => { dispatch({ type: "increment" })} }>Add </button>
            <button onClick={() => { dispatch({ type: "decrement" }) }}>Subtract </button>
        </div>
    )
}

export default Example