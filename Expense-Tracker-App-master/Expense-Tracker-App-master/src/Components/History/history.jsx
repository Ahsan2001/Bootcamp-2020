import React, { useContext } from 'react'
import { TransactionContext } from '../../Context/GlobalContext';

import styles from './style.module.css'


const History = () => {
    const { transactions, setTransactions } = useContext(TransactionContext);

    function deleteTesting(id) {
        const result = transactions.splice(id, 1);
        setTransactions(result)
    }


    return (
        <div className={styles.main_wrap}>
            <h2>Transactions History</h2>
            <ul>
                {
                    transactions.map((transObj, ind) => {
                        return (
                            <li key={ind} className={transObj.amount < 0 ? styles.minus : styles.plus}>
                                {transObj.description}
                                <span> {transObj.amount}</span>
                                <button onClick={() => { deleteTesting(ind) }} className={styles.clossBtn}>X</button>
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default History