import React, { useState, useContext, useEffect } from "react";
import styles from "./AttendanceReport.module.scss";
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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';


export default function Attendance() {

  const [employeeNames, setEmployeeNames] = useState([])

  var employeeNamesArr = [];
  useEffect(() => {
    fetch("http://attendance.devbox.co/api/v1/employees")
      .then(res => res.json())
      .then(
        (response) => {
          var abc = response.data.filter((x) => x.active)
          for (var i = 0; i < abc.length; i++) {
            employeeNamesArr.push(abc[i].name)
          }
          setEmployeeNames(employeeNamesArr)
        },
        (error) => {
          console.log("error", error)
        }
      )
  })

  const Chevron = () => {
    return (
      <span className={styles.dropDownCustomizeSvg}>
        <SVG src={`${process.env.PUBLIC_URL}/images/downArrow.svg`} />
      </span>
    );
  };

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Attendance</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Report</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Check Attendance Report</h1>
      </div>
      <div className={styles.mainCard}>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl fullWidth>
                <TextField
                  id="questions"
                  fullWidth
                  size="small"
                  label="Employee"
                  variant="outlined"
                  className={styles.placeholderColor}
                  menuprops={{ variant: "menu" }}
                  select
                  SelectProps={{ IconComponent: () => <Chevron /> }}
                >
                  {employeeNames.map((option) => (

                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>

                  ))}
                </TextField>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl fullWidth>
                <TextField
                  id="date"
                  label="From"
                  type="date"
                  variant="outlined"
                  defaultValue="2017-05-24"
                  size="small"
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
                  id="date"
                  label="To"
                  type="date"
                  variant="outlined"
                  defaultValue="2017-05-24"
                  size="small"
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
              <FormControl >
                <FormControlLabel
                  className={styles.allCheckbox}
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="ALL"
                  labelPlacement="end"
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl >
                <FormControlLabel
                  className={styles.satSunCheckbox}
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="SATURDAY"
                  labelPlacement="end"
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl >
                <FormControlLabel
                  className={styles.satSunCheckbox}
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="SUNDAY"
                  labelPlacement="end"
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <Button variant="contained" color="primary" className={styles.saveButton}>
                Generate Report
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <div className={styles.flex}>
          <TableContainer component={Paper} className={styles.table}>
            <Table aria-label="simple table">
              <TableHead className={styles.tableHeader}>
                <TableRow>
                  <TableCell className={styles.TableCell}>Name</TableCell>
                  <TableCell className={styles.TableCell} >Date</TableCell>
                  <TableCell className={styles.TableCell} >Day</TableCell>
                  <TableCell className={styles.TableCell} >Checkin</TableCell>
                  <TableCell className={styles.TableCell} >Checkout</TableCell>
                  <TableCell className={styles.TableCell} >Time Spend</TableCell>
                  <TableCell className={styles.TableCell} >Leave Type</TableCell>
                  <TableCell className={styles.TableCell} >Note</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" className={styles.nameCells}>
                  </TableCell>
                  <TableCell className={styles.subCells}></TableCell>
                  <TableCell className={styles.subCells}></TableCell>
                  <TableCell className={styles.subCells}></TableCell>
                  <TableCell className={styles.subCells}></TableCell>
                  <TableCell className={styles.subCells}></TableCell>
                  <TableCell className={styles.subCells}></TableCell>
                  <TableCell className={styles.subCells}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </>
  );
}
