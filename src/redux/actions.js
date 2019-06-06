// Action Types
export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS';

// Action creators
export const getAllTransactions = (transactions, accountBalance) => {
    return { type: 'REQUEST_TRANSACTIONS', transactions, accountBalance }
}

export const fetchTransactions = (page) => {
    var allTransactions = [];
    console.log('did I run?');
    return(dispatch) => {
        console.log(page)
        return fetch(`http://resttest.bench.co/transactions/${page || 1}.json`)
        .then((res) => {
            console.log('result', res)
            return res.json();
        })
        .then((data) => {
            const totalTransactions = data.totalCount
            console.log(data)
            allTransactions = allTransactions.concat(data.transactions)
            if (allTransactions.length < totalTransactions) {
                console.log('again!', allTransactions)
                fetchTransactions(data.page + 1)
            // } else {
            }
            // Use reduce to add all of the transaction amounts together
            const sumAll = (array, prop) => array.reduce((a, b) => +a + +b[prop], 0);
            const accountBalance = sumAll(allTransactions, 'Amount')
                // Make it into a currency
                .toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });

            // Send array with all transactions and account balance to the reducer
            dispatch(getAllTransactions(allTransactions, accountBalance));
        })
        .catch(err => {
            console.log(err)
        });
    }
}