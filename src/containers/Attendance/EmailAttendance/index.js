import React, { useState, useContext, useEffect } from "react";
import styles from "./EmailAttendance.module.scss";
import SVG from "react-inlinesvg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function EmailAttendance() {

  const [optionsMonths, setOptionsMonths] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ])
  const [optionsYears, setOptionsYears] = useState(['2021', '2020', '2019', '2018', '2017'])
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  const handleChangeMonths = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleChangeYears = (event) => {
    setSelectedMonth(event.target.value);
  };

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
          <span className={styles.breadCrumbsSpan}>Email</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Email Attendance</h1>
      </div>
      <div className={styles.mainCard}>
        <div className={styles.gridContainer}>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={4}>
                <div>
                  <FormControl fullWidth>
                    <TextField
                      id="questions"
                      fullWidth
                      size="small"
                      label="Months"
                      variant="outlined"
                      value={selectedMonth}
                      onChange={handleChangeMonths}
                      className={styles.placeholderColor}
                      menuprops={{ variant: "menu" }}
                      select
                      SelectProps={{ IconComponent: () => <Chevron /> }}
                    >
                      {optionsMonths.map((option) => (

                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>

                      ))}
                    </TextField>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div>
                  <FormControl fullWidth>
                    <TextField
                      id="questions"
                      fullWidth
                      size="small"
                      label="Years"
                      variant="outlined"
                      className={styles.placeholderColor}
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
              <Grid item xs={12} sm={2}>
                <div className={styles.allCheckboxContainer}>
                  <FormControl >
                    <FormControlLabel
                      className={styles.allCheckbox}
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="To Admin"
                      labelPlacement="end"
                    />
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button variant="contained" color="primary" className={styles.cardButtons}>
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

    </>
  );
}
