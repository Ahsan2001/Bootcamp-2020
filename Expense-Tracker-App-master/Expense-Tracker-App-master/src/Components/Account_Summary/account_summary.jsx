import React, { useContext } from 'react'
import { TransactionContext } from '../../Context/GlobalContext';
import styles from './style.module.css'





const AccountSummary = () => {
  const { transactions } = useContext(TransactionContext);
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount
      }
    }
    return income
  }
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += transactions[i].amount
      }
    }
    return expense
  }
  return (
    <div className={styles.Main_wrap}>
      <h4 className={styles.Income}>Income <span>${getIncome()}</span></h4>
      <h4 className={styles.Expense}>Expense <span>${getExpense()}</span></h4>
    </div>
  )
}

export default AccountSummary