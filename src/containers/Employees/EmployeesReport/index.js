import React, { useState, useContext, useEffect } from "react";
import styles from "./EmployeesReport.module.scss";
import SVG from "react-inlinesvg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { RootContext } from "../../../context/RootContext";
import { useHistory } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function EmployeesReport() {
  const { ActiveEmployeeNames } = useContext(RootContext);
  const [personName, setPersonName] = useState('');
  const history = useHistory();
  const [optionsYears, setOptionsYears] = useState(['2021', '2020', '2019', '2018', '2017'])
  const [selectedYear, setSelectedYear] = useState('')

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

  const handleChangeYears = (event) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    leavesFun();
  }, []);

  const leavesFun = () => {
    // var leavesArr = [];
    // fetch("http://attendance.devbox.co/api/v1/leaves")
    //   .then(res => res.json())
    //   .then(
    //     (response) => {
    //       var data = response.data
    //       for (var i = 0; i < data.length; i++) {
    //         leavesArr.push(data[i])
    //       }
    //       setLeavesData(leavesArr)
    //     },
    //     (error) => {
    //       console.log("error", error)
    //     }
    //   )
  }

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Employees</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>report</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Employee report (2021)</h1>
      </div>
      <div className={styles.mainCard}>
        <div className={styles.gridContainer}>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={3} className={styles.fieldGrid}>
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
                    {ActiveEmployeeNames.map((option) => (
                      <MenuItem key={option.name} value={option.employee_external_id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <div>
                  <FormControl fullWidth>
                    <TextField
                      id="questions"
                      fullWidth
                      size="small"
                      label="Years"
                      variant="outlined"
                      className={styles.fieldDiv}
                      value={selectedYear}
                      onChange={handleChangeYears}
                      menuprops={{ variant: "menu" }}
                      select
                      SelectProps={{ IconComponent: () => <Chevron /> }}
                    >
                      {optionsYears.map((option) => (

                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>

                      ))}
                    </TextField>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} className={styles.buttonDiv}>
                <Button variant="contained" color="primary" className={styles.cardButtons}>
                  Populate
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={styles.mainCard}>
        <div className={styles.gridContainer}>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid2}>
                <FormControl fullWidth >
                  <TextField
                    className={styles.fieldDiv2}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Note"
                    type="text"
                    variant="outlined"
                    disabled={true}
                    value="check"
                  >
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid2}>
                <FormControl fullWidth >
                  <TextField
                    className={styles.fieldDiv2}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Joining Date"
                    type="text"
                    variant="outlined"
                    disabled={true}
                    value="2014-12-01"
                  >
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid2}>
                <FormControl fullWidth >
                  <TextField
                    className={styles.fieldDiv2}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Spent Year in devbox"
                    type="text"
                    variant="outlined"
                    disabled={true}
                    value="6"
                  >
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid2}>
                <FormControl fullWidth >
                  <TextField
                    className={styles.fieldDiv2}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Leaves in Year"
                    type="text"
                    variant="outlined"
                    disabled={true}
                    value="No Leaves"
                  >
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid2}>
                <FormControl fullWidth >
                  <TextField
                    className={styles.fieldDiv2}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Hours in Year"
                    type="text"
                    variant="outlined"
                    disabled={true}
                    value="99"
                  >
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4} className={styles.fieldGrid2}>
                <TableContainer className={styles.table}>
                  <Table aria-label="custom pagination table">
                    <TableHead className={styles.tableHeader}>
                      <TableRow>
                        <TableCell className={styles.TableCell}>Id</TableCell>
                        <TableCell className={styles.TableCell}>Employee External ID</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>

                      <TableRow>
                        <TableCell className={styles.nameCells}>fsdfsd</TableCell>
                        <TableCell className={styles.nameCells}>fdsfsd</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>


















        </div>
      </div>
    </>
  );
}
