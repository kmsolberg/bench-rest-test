import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  CircularProgress
} from "@material-ui/core";
import moment from "moment";

const TransactionsTable = ({ transactions, accountBalance, isLoading }) => {
  if (isLoading) {
    return <CircularProgress style={{ color: "#098B8C" }} />;
  }
  return (
    <Paper className="transaction-table-wrapper">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Account</TableCell>
            <TableCell align="right">{accountBalance}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row, index) => (
            <TableRow key={row.Company + index} className="transaction-row">
              <TableCell component="th" scope="row" className="grey-cell">
                {moment(row.Date).format("MMM Do, YYYY")}
              </TableCell>
              <TableCell align="left">{row.Company}</TableCell>
              <TableCell align="left" className="grey-cell">
                {row.Ledger}
              </TableCell>
              <TableCell align="right">
                {Number(row.Amount).toLocaleString("en-CA", {
                  style: "currency",
                  currency: "CAD"
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

TransactionsTable.defaultProps = {
  accountBalance: "$0",
  isLoading: false
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  accountBalance: PropTypes.string,
  isLoading: PropTypes.bool
};

export default TransactionsTable;
