import React, { useState, useContext, useEffect } from "react";
import styles from "./ManageAttendance.module.scss";
import SVG from "react-inlinesvg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { RootContext } from "../../../context/RootContext";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import clsx from "clsx";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});


export default function ManageAttendance() {

  const [personName, setPersonName] = useState([]);
  const { ActiveEmployeeNames, setIndex, attendanceData, setAttendanceData } = useContext(RootContext);
  const [employeesExId, setEmployeesExID] = useState([])
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [date, setDate] = useState('')
  const history = useHistory();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  };

  const handleChange = (event) => {
    var values = event.target.value
    var employeeIdsArr = []
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < ActiveEmployeeNames.length; j++) {
        if (values[i] == ActiveEmployeeNames[j].name) {
          employeeIdsArr.push(ActiveEmployeeNames[j].employee_external_id)
        }
      }
    }
    setEmployeesExID(employeeIdsArr)
    setPersonName(event.target.value);
  };

  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dateFun = (event) => {
    setDate(event.target.value)
  }

  const checkinFun = (event) => {
    setCheckin(event.target.value)
  }

  const checkoutFun = (event) => {
    setCheckout(event.target.value)
  }

  const addAttendance = () => {
    var epmolyeeExIDArr = employeesExId;
    var requestOptions = {
      method: "POST",
    };
    for (var i = 0; i < epmolyeeExIDArr.length; i++) {
      fetch(`http://attendance.devbox.co/api/v1/attendances?date=${date}&checkin=${checkin}&checkout=${checkout}&${epmolyeeExIDArr[i]}=true`, requestOptions)
        .then((response) => { response.text() })
        .catch((error) => console.log("error", error));
    }
    attendanceFun();
  }

  useEffect(() => {
    attendanceFun();
  }, []);

  const attendanceFun = () => {
    var attendanceArr = [];
    fetch("http://attendance.devbox.co/api/v1/attendances/new")
      .then(res => res.json())
      .then(
        (response) => {
          var data = response.data
          for (var i = 0; i < data.length; i++) {
            attendanceArr.push(data[i])
          }
          setAttendanceData(attendanceArr)
        },
        (error) => {
          console.log("error", error)
        }
      )
  }

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Attendance</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Manage</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Manage Attendance Manually</h1>
      </div>
      <div className={styles.mainCard}>

        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl fullWidth >
                <TextField
                  className={styles.fieldDiv}
                  id="date"
                  label="DATE"
                  type="date"
                  variant="outlined"
                  defaultValue="2021-07-29"
                  size="small"
                  value={date}
                  onChange={dateFun}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl fullWidth>
                <TextField
                  className={styles.fieldDiv}
                  id="date"
                  label="CHECKIN"
                  type="time"
                  variant="outlined"
                  defaultValue="00:00:00"
                  size="small"
                  value={checkin}
                  onChange={checkinFun}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl fullWidth>
                <TextField
                  className={styles.fieldDiv}
                  id="date"
                  label="CHECKOUT"
                  type="time"
                  variant="outlined"
                  defaultValue="00:00:00"
                  size="small"
                  value={checkout}
                  onChange={checkoutFun}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl fullWidth variant="outlined">
                <InputLabel >Select employees</InputLabel>
                <Select
                  className={styles.fieldDiv}
                  id="demo-mutiple-checkbox"
                  multiple
                  value={personName}
                  variant="outlined"
                  onChange={handleChange}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <div className={styles.overFlow}>
                      {selected.map((value) => (
                        <Chip label={value} />
                      ))}

                    </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {ActiveEmployeeNames.map((option) => (
                    <MenuItem key={option.employee_external_id} name={option.employee_external_id} value={option.name}>
                      <ListItemText primary={option.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <Button
                variant="contained"
                color="primary"
                className={styles.saveButton}
                onClick={addAttendance}
              >
                Add
              </Button>
              <Button variant="contained" color="default">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <div className={styles.flex}>
          <TableContainer component={Paper} className={styles.table}>
            <Table className={classes.table} aria-label="custom pagination table">
              <TableHead className={styles.tableHeader}>
                <TableRow>
                  <TableCell className={styles.TableCell}>Name</TableCell>
                  <TableCell className={styles.TableCell} >Date</TableCell>
                  <TableCell className={styles.TableCell} >Checkin</TableCell>
                  <TableCell className={styles.TableCell} >Checkout</TableCell>
                  <TableCell className={styles.TableCell} >Time Spend</TableCell>
                  <TableCell className={styles.TableCell} >Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? attendanceData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : attendanceData
                ).map((row) => (
                  <TableRow>
                    <TableCell className={styles.nameCells}>{row.name}</TableCell>
                    <TableCell className={styles.subCells}>{row.date}</TableCell>
                    <TableCell className={styles.subCells}>{row.checkin}</TableCell>
                    <TableCell className={styles.subCells}>{row.checkout}</TableCell>
                    <TableCell
                      className=
                      {clsx(
                        row.time_spend >= '08:00'
                          ? styles.time_spend_up
                          :
                          styles.time_spend_down
                      )}

                    >
                      {row.time_spend}
                    </TableCell>
                    <TableCell className={styles.subCells}>
                      <button
                        value={row.attendance_id}
                        onClick={(e) => {
                          var attendanceId = e.target.value
                          for (var i = 0; i < attendanceData.length; i++) {
                            var tempId = attendanceData[i].attendance_id
                            if (tempId == attendanceId) {
                              setIndex(i);
                            }
                          }
                          history.push('/attendance/edit')
                        }}
                      >Edit</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    className={styles.pagginationContainer}
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={6}
                    count={attendanceData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </div>

    </>
  );
}
