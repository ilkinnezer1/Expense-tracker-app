import React, { Component } from 'react'
import { connect } from 'react-redux'
import Balance from '../Components/Balance'
import ExpenceList from '../Components/ExpenceList'
import Income from '../Components/Income'
import { deleteTransaction } from '../Redux/Action/ActionCreator'
import "../Components/Style/Income.css"

class Tracker extends Component {
    render() {
        const {transactions, deleteTransaction} = this.props
        console.log(transactions)
        return (
            <div className="tracker d-flex flex-column justify-content-center align-items-center">
                <div className="bordered-tracker" >
                <Balance transactions={transactions} />
                <Income transactions={transactions}/>
                <ExpenceList transactions={transactions} deleteTransaction={(id) => deleteTransaction(id)}/>
            </div>
            </div>
           
        )
    }
}

const mapStateToProps = state => ({
    transactions: state.transaction
})

const mapDispatchToProps = dispatch => ({ 
    deleteTransaction: (id) => dispatch(deleteTransaction(id))
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Tracker)