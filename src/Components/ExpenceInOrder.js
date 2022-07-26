import React from 'react'
import "./Style/ExpenceListandOrder.css"


// Plus and minus define the colors - blue and red
const ExpenceInOrder = ({transaction, deleteTransaction}) => {
    const plusAndMinusIcon = transaction.amount >= 0 ? "+" : "-"
        const handleDelete = () => {
            deleteTransaction(transaction.id)
        }
    return (
        <div className="list-container">
            <li className={transaction.amount >= 0 ? "plus" : "minus", "list-elements d-flex justify-content-between align-items-center px-2 py-1" }>
             {transaction.selectValue} |  {transaction.text} 
            <div>
            <span>
                {plusAndMinusIcon}{Math.abs(transaction.amount)} AZN
            </span>
            <button onClick={handleDelete} className="btn btn-outline-danger pl-1 pr-1 m-1">X</button>
            </div>
            </li>
        </div>
    )
}

export default ExpenceInOrder
