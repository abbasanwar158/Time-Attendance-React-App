import React, { useState, useContext, useEffect } from "react";
import styles from "./ViewLeaves.module.scss";
import SVG from "react-inlinesvg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import PropTypes from 'prop-types';
import { RootContext } from "../../../context/RootContext";
import { useHistory } from "react-router-dom";


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

export default function ViewLeaves() {
  const classes = useStyles2();
  const { ActiveEmployeeNames } = useContext(RootContext);
  const [leavesData, setLeavesData] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [personName, setPersonName] = useState('');
  const history = useHistory();


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const Chevron = () => {
    return (
      <span className={styles.dropDownCustomizeSvg}>
        <SVG src={`${process.env.PUBLIC_URL}/images/downArrow.svg`} />
      </span>
    );
  };

  useEffect(() => {
    leavesFun();
  }, []);

  const leavesFun = () => {
    var leavesArr = [];
    fetch("http://attendance.devbox.co/api/v1/leaves")
      .then(res => res.json())
      .then(
        (response) => {
          var data = response.data
          for (var i = 0; i < data.length; i++) {
            leavesArr.push(data[i])
          }
          setLeavesData(leavesArr)
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
          <span className={styles.breadCrumbsSpan}>Leaves</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>View</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>View All Leaves</h1>
      </div>
      <div className={styles.mainCard}>
        <div className={styles.gridContainer}>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid}>
                <FormControl fullWidth >
                  <TextField
                    className={styles.fieldDiv}
                    value={personName}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Employee"
                    variant="outlined"
                    onChange={handleChange}
                    menuprops={{ variant: "menu" }}
                    select
                    SelectProps={{ IconComponent: () => <Chevron /> }}
                  >
                    {ActiveEmployeeNames.map((options) => (
                      <MenuItem key={options} value={options}>
                        {options}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2} className={styles.buttonGrid}>
                <Button variant="contained" color="primary" >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={styles.flex}>
          <TableContainer component={Paper} className={styles.table}>
            <Table className={classes.table} aria-label="custom pagination table">
              <TableHead className={styles.tableHeader}>
                <TableRow>
                  <TableCell className={styles.TableCell}>Employee Name</TableCell>
                  <TableCell className={styles.TableCell} >Time</TableCell>
                  <TableCell className={styles.TableCell} >Date</TableCell>
                  <TableCell className={styles.TableCell} >Leave Type</TableCell>
                  <TableCell className={styles.TableCell} >Note</TableCell>
                  <TableCell className={styles.TableCell} >Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? leavesData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : leavesData
                ).map((row, i) => (
                  <TableRow>
                    <TableCell className={styles.nameCells}>{row.employee_id}</TableCell>
                    <TableCell className={styles.subCells}>{row.time}</TableCell>
                    <TableCell className={styles.subCells}>{row.date}</TableCell>
                    <TableCell className={styles.subCells}>{row.status}</TableCell>
                    <TableCell className={styles.subCells}>{row.note}</TableCell>
                    <TableCell className={styles.subCells}><a onClick={() => history.push('/leaves/edit')}>Edit</a></TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    className={styles.pagginationContainer}
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={6}
                    count={leavesData.length}
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
