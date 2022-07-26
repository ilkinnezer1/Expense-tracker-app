export const addTransaction = transaction => ({
    type: "ADD_TRANSACTION",
    payload: transaction
})
export const deleteTransaction = transactionID => ({
    type: "DELETE_TRANSACTION",
    payload: transactionID
})

