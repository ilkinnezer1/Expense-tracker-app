import React from 'react'
import ExpenceInOrder from './ExpenceInOrder'
import { Link } from 'react-router-dom'
import "./Style/ExpenceListandOrder.css"

const ExpenceList = ({transactions, deleteTransaction}) => {
//Header will be located in the center, dark-outlined add button and below expense lists will be persisted
    return (
        <div className="header-container">
            <div className="d-flex justify-content-between align-items-center mt-4 p-1 ">
                <div><h3 className="text-header h3-header text-primary">Transactions</h3></div>
            <div className="d-flex justify-content-end align-items-end">
            <Link to="/add" className="link">
                    <button type="button" className="btn btn-outline-dark">+ Add</button>
            </Link>
                </div>
            </div>
            <ul>
            {transactions.map(transaction => 
            <ExpenceInOrder transaction={transaction} key={transaction.id} deleteTransaction={(id) => deleteTransaction(id)}/> )}
            </ul>
        </div>
    )
}

export default ExpenceList
