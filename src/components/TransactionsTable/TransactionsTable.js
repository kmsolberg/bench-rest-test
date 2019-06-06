import React from 'react';
import { Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper
 } from '@material-ui/core';

import moment from 'moment';

const TransactionsTable = ({ transactions }) => (
    <Paper>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Company</TableCell>
                <TableCell align="left">Account</TableCell>
                {/* TODO Add Total */}
                <TableCell align="right">Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {transactions.map((row, index) => (
                <TableRow key={row.Company + index} className="transaction-row">
                    <TableCell component="th" scope="row" className="grey-cell">
                        {moment(row.Date).format('MMM Do, YYYY')}
                    </TableCell>
                    <TableCell align="left">{row.Company}</TableCell>
                    <TableCell align="left" className="grey-cell">{row.Ledger}</TableCell>
                    <TableCell align="right">
                        {Number(row.Amount).toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </Paper>
);

export default TransactionsTable;
