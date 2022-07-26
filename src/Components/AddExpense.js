import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTransaction } from '../Redux/Action/ActionCreator'
import "./Style/AddExpense.css"

const AddExpense = ({transactions, addTransaction}) =>  {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const [selectValue, setSelectValue] = useState("")

    const addTransactionMain = transaction => { //calling a function from action coming from reducer
        addTransaction(transaction)
    }
    const id = transactions[0] ? transactions[0].id + 1 : 1 //defines id increasing by adding new transactions

 const handleSubmit = event => { // After submitting the form transaction value will be send to reducer 
            event.preventDefault()
            const addedTransaction = {
                id: id,
                text:text,
                amount: amount,
                selectValue: selectValue}
            addTransactionMain(addedTransaction)
            clearInput()
        }
    const clearInput = () => {
            setAmount(0)
            setText("")
        }
        return (
            <div>
                <header className="header">
                <Link to="/">
                        <button className="btn btn-outline-danger mx-5 my-3">Back</button>
                </Link>
                </header>
              <div className="d-flex justify-content-center align-items-center main-container">
                <form onSubmit={handleSubmit} className="p-5 main-form-container">
                <h1 className="text-center text-muted mb-5">Transaction</h1>
                <div className="input-container mb-3">
                        <label htmlFor="option" className="mb-1 label">Utilities</label>
                        <select
                         required
                         className="form-select w-100"
                         id="option"
                         value={selectValue}
                         onChange={e => setSelectValue(e.target.value)}>
                            <option selected>Select</option>
                            <option value="Job">Work</option>
                            <option value="Education">Education</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Home stuff">Home stuff</option>
                            <option value="Products">Products</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="input-container mb-3">
                        <label htmlFor="type" className="mb-1 label">Note</label>
                        <input 
                        required
                        className="form-control"
                        type="text" 
                        id="type" 
                        name="expence-type" 
                        placeholder="type your note..."
                        autoComplete="off"
                        value={text}
                        onChange={e => setText(e.target.value)}/>
                    </div>
                    <div className="input-container mt-3">
                        <label htmlFor="amount" className="mb-1 label">Amount</label>
                        <input
                         required
                         className="form-control"
                         type="number"
                         id="amount"
                         name="expence-amount" 
                         placeholder="Expence amount"
                         autoComplete="off"
                         value={amount}
                         onChange={e => setAmount( e.target.value)}/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-5">
                    <button type="submit" className="btn btn-outline-primary primary-button mt-5">Add Transaction</button>
                    <button onClick={clearInput} type="reset" className="btn btn-outline-danger mt-5">Reset Transaction </button>
                    </div>
                </form>
                </div>
            </div>
        )}
        

const mapStateToProps = state => ({
    transactions: state.transaction
})

const mapDispatchToProps = dispatch => ({
    addTransaction: (transaction) => dispatch(addTransaction(transaction))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddExpense)