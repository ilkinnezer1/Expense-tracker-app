import React from 'react'
import "./Style/Income.css"

const Income = ({transactions}) => {
    const singleAmount = transactions.map(transaction => Number(transaction.amount))
    const incomeAmount = singleAmount.filter(income => income >= 0)
    const totalIncome = incomeAmount.reduce((acc, income) => acc + income,0)
    const expenseAmount = singleAmount.filter(income => income <= 0)
    const totalExpense = expenseAmount.reduce((acc, item) => acc + item,0)

    return (
        <div className="income-exp-container d-flex justify-content-center align-items-center">
            <div className="mx-3 income text-center">
                <h4 className="mt-2">Profit</h4>
                <p className="plus">+{totalIncome} AZN</p>
            </div>
            <div className="mx-3 expense text-center">
                <h4 className="mt-2">Expense</h4>
                <p className="minus">{totalExpense} AZN</p>
            </div>
        </div>
    )
}

export default Income
