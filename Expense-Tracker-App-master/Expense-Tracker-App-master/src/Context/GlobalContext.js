import React, { createContext, useReducer, useState } from 'react';
import  { AppReducer } from './reducer';


const initialData = [
    { amount: 800, description: "Cash" },
    { amount: 40, description: "Book" }
]

export const TransactionContext = createContext(initialData);



export const ContextProvider = ({ children }) => {


    const [state, dispatch] = useReducer(AppReducer, initialData);
    
    function addTransaction(transObj) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                amount: +(transObj.amount),
                description: transObj.description,
            }
        })
    }


    const [transactions, setTransactions] = useState();
 


    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
                addTransaction,
                setTransactions
            }
        }>
            {children}
        </TransactionContext.Provider>
    );

}






