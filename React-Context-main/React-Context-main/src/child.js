import React, { useContext } from 'react'
import myContext from './context';
let Child = () => {
    let value = useContext(myContext)
    return (
        <div> Hello World From Grand Child {value}
        </div>
    )
};
export default Child