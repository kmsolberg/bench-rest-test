const initialState = {
    loading: true,
    transactions: [],
};

function restTest(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_TRANSACTIONS':
            return {
                ...state,
                transactions: action.transactions,
            };
        default:
            return state;
    } 
}

export default restTest;
