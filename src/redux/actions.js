// Action Types
export const REQUEST_TRANSACTIONS = "REQUEST_TRANSACTIONS";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";

// Action creators
export const receiveAllTransactions = (transactions, accountBalance) => {
  return { type: "RECEIVE_TRANSACTIONS", transactions, accountBalance };
};

export const requestAllTransactions = () => {
  return { type: REQUEST_TRANSACTIONS };
};

export const fetchTransactions = page => {
  let pagesRequired = 0;
  let pageRequests = [];
  return dispatch => {
    dispatch(requestAllTransactions());
    fetch(`http://resttest.bench.co/transactions/1.json`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then(data => {
        // Find the max number of pages required
        pagesRequired = Math.ceil(data.totalCount / 10);
        // Make an array of each URL needed for all pages
        for (let i = 1; i <= pagesRequired; i++) {
          pageRequests.push(`http://resttest.bench.co/transactions/${i}.json`);
        }
        // Use Promise.all to make all requests before reutrning data
        Promise.all(
          pageRequests.map(request =>
            fetch(request).then(res => {
              if (res.ok) {
                return res.json();
              } else {
                throw Error(`Request rejected with status ${res.status}`);
              }
            })
          )
        ).then(data => {
          let allTransactions = [];
          data.map(
            page =>
              (allTransactions = allTransactions.concat(page.transactions))
          );
          // Use reduce to add all of the transaction amounts together
          const getTransactionTotal = (array, prop) =>
            array.reduce((a, b) => +a + +b[prop], 0);
          const accountBalance = getTransactionTotal(allTransactions, "Amount")
            // Make it into a currency
            .toLocaleString("en-CA", { style: "currency", currency: "CAD" });

          // Send array with all transactions and account balance to the reducer
          dispatch(receiveAllTransactions(allTransactions, accountBalance));
        });
      })
      .catch(err => {
        console.log("There was a problem with your call", err.message);
      });
  };
};
