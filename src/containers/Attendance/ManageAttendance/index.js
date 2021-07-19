import React, { useState, useContext, useEffect } from "react";
import styles from "./ManageAttendance.module.scss";
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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


export default function ManageAttendance() {

  const [multiSelect, setMultiSelect] = useState([])
  const [personName, setPersonName] = React.useState([]);

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
          setMultiSelect(employeeNamesArr)
        },
        (error) => {
          console.log("error", error)
        }
      )
  })

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
    setPersonName(event.target.value);
  };

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
              <FormControl fullWidth>
                <TextField
                  id="date"
                  label="DATE"
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
                  label="CHECKIN"
                  type="time"
                  variant="outlined"
                  defaultValue="00:00:00"
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
                  label="CHECKOUT"
                  type="time"
                  variant="outlined"
                  defaultValue="00:00:00"
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
              <FormControl fullWidth variant="outlined">
                <InputLabel >Select employees</InputLabel>
                <Select
                  id="demo-mutiple-checkbox"
                  multiple
                  value={personName}
                  variant="outlined"
                  onChange={handleChange}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <div className={styles.overFlow}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {multiSelect.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
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
              <Button variant="contained" color="primary" className={styles.saveButton}>
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
            <Table aria-label="simple table">
              <TableHead className={styles.tableHeader}>
                <TableRow>
                  <TableCell className={styles.TableCell}>Picture</TableCell>
                  <TableCell className={styles.TableCell} >Name</TableCell>
                  <TableCell className={styles.TableCell} >Checkin</TableCell>
                  <TableCell className={styles.TableCell} >Checkout</TableCell>
                  <TableCell className={styles.TableCell} >Time Spend</TableCell>
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
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </>
  );
}
