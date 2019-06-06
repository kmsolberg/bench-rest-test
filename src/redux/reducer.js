const initialState = {
  isLoading: false,
  transactions: [],
  accountBalance: 0
};

function restTest(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_TRANSACTIONS":
      return {
        ...state,
        isLoading: true
      };
    case "RECEIVE_TRANSACTIONS":
      return {
        ...state,
        isLoading: false,
        transactions: action.transactions,
        accountBalance: action.accountBalance
      };
    default:
      return state;
  }
}

export default restTest;