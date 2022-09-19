import React, { useContext, useState } from 'react'
import { TransactionContext } from '../../Context/GlobalContext';
import styles from './style.module.css'


const Transactions = () => {


    const { addTransaction } = useContext(TransactionContext);
    const [description, setDes] = useState("");
    const [amount, setAmount] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("Checking")
        if (description === "") {
            alert("Please Enter The Description")
            return false
        }
        else if (amount == 0) {
            alert("Please Enter The Amount")
            return false
        }
        else {
            addTransaction({
                amount: amount,
                description: description,
            })
            setDes("");
            setAmount("");
        }
    }


    return (
        <div className={styles.AddNewTransaction}>
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.flex}>
                    <label htmlFor="des">Description</label>
                    <input type="text" id="des" placeholder='Enter Description' value={description} onChange={(e) => setDes(e.target.value)} />
                </div>
                <div className={styles.flex}>
                    <label htmlFor="num">Amount</label>
                    <input type="number" id="num" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className={styles.submit_BTn}>
                    <button>Add to Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default Transactions