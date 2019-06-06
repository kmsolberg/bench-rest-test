import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import { fetchTransactions } from '../../redux/actions';
import './Transactions.scss';

class Transactions extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTransactions());
    }
    render() {
        const { transactions } = this.props;
        return (
            <div className="transactions-body">
                <TransactionsTable
                    transactions={transactions}
                />
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({
    transactions: state.transactions,
})

export default connect(mapStateToProps)(Transactions);
