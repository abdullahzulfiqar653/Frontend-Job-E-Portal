import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { savingId } from "../../actions/auth";
import moment from "moment";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "red",
    color: "white",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ setShow }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const state = useSelector((state) => state);
  const user = state.auth.user;

  console.log(user);
  const id = state.auth.id;
  const formName = state.auth.formName;
  console.log(user, id, formName);

  const clickHandler = (id, date) => {
    setShow(true);
    dispatch(savingId(id, date));
  };

  return (
    <TableContainer component={Paper} style={{ boxShadow: "none" }}>
      <h1 className="pt-3">
        <span>Account Information</span>
      </h1>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="center">Fee Status</StyledTableCell>
            <StyledTableCell align="center" className="border">
              Job Status
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user &&
            user.apps.map((row) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {moment(row.time_submitted).format("llll")}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.paid ? (
                    <Button
                      className="paid"
                      variant="contained"
                      color="secondary"
                    >
                      Paid
                    </Button>
                  ) : (
                    <Button
                      className="unPaid mx-1"
                      // class="mx-1"
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        clickHandler(row.id, row.submitted_at);
                      }}
                    >
                      Unpaid
                    </Button>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.accepted_by_hod && row.job_confirm ? (
                    <Button
                      className="mx-1"
                      variant="contained"
                      color="secondary"
                    >
                      Selected For Job
                    </Button>
                  ) : row.accepted_by_hod ? (
                    <Button
                      className="unPaid"
                      variant="contained"
                      color="secondary"
                    >
                      Called For Interview
                    </Button>
                  ) : (
                    <Button
                      className="unPaid"
                      variant="contained"
                      color="secondary"
                      // onClick={() => {
                      //   clickHandler(row.form_name, row.id, row.submitted_at);
                      // }}
                    >
                      In Review
                    </Button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
