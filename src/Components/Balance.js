import React from "react"
import "./Style/Balance.css"


const Balance = ({transactions}) =>{

const singleAmount = transactions.map(transaction => Number(transaction.amount))
const totalAmount = singleAmount.reduce((acc, item) =>  (acc + item), 0)

   
    return (
        
        <div className="mb-4 balance-card">
            <p className="mx-3 my-2 text-white">React Bank</p>
            <div className="mt-4 mx-3">
            <p className="text-white mb-0">Balance</p>
            <h2 className="text text-white">{totalAmount} AZN</h2> 
            </div> 
            <div className="visa-logo">
            <h1 className="text-white">VISA</h1>
            </div>
        </div>
    
    )
}


export default Balance