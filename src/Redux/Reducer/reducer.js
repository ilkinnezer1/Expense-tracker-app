const initialState = {
    transaction: []
}

const rootExpenceTrackerReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TRANSACTION": 
        return {
            ...state, 
             transaction: [action.payload, ...state.transaction]
        }
        case "DELETE_TRANSACTION":
            return {
                ...state,  transaction: state.transaction.filter((transaction) => transaction.id !== action.payload)
            }
        default:
             return state
    }
} 
export default rootExpenceTrackerReducer