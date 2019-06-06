// Action Types
export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS';

// Action creators
export const getAllTransactions = (transactions) => {
    return { type: 'REQUEST_TRANSACTIONS', transactions }
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
            dispatch(getAllTransactions(allTransactions));
        })
        .catch(err => {
            console.log(err)
        });
    }
}