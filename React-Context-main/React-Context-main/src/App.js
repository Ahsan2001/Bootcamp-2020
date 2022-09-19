import React from 'react'
import Child from './child'
import myContext from './context'

const App = () => {
  return (
    <>
      <myContext.Provider value={10}>
        <Child />
      </myContext.Provider>
    </>
  )
}

export default App