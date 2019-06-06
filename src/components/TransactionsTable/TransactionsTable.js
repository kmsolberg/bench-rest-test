import React from 'react';
import { Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper
 } from '@material-ui/core';

const TransactionsTable = () => (
    <Paper>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Company</TableCell>
                <TableCell align="center">Account</TableCell>
                {/* TODO Add Total */}
                <TableCell align="center">Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* {rows.map(row => (
                <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
                ))} */}
            </TableBody>
        </Table>
    </Paper>
);

export default TransactionsTable;
