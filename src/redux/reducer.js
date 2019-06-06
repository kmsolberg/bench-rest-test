const initialState = {
    loading: true,
    transactions: [],
    accountBalance: 0,
};

function restTest(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_TRANSACTIONS':
            return {
                ...state,
                transactions: action.transactions,
                accountBalance: action.accountBalance,
            };
        default:
            return state;
    } 
}

export default restTest;
