import React, { useState, useContext, useEffect } from "react";
import styles from "./LeavesWBS.module.scss";
import SVG from "react-inlinesvg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { RootContext } from "../../../context/RootContext";


export default function LeavesWBS() {

  const { ActiveEmployeeNames } = useContext(RootContext);
  const [optionsYears, setOptionsYears] = useState(['2021', '2020', '2019', '2018', '2017'])
  const [selected, setSelected] = useState('')
  const [yearsValue, setYearsValue] = useState('')

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const yearsChangeHandle = (event) => {
    setYearsValue(event.target.value);
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
              <Grid item xs={12} sm={5} className={styles.fieldGrid}>
                <FormControl fullWidth >
                  <TextField
                    className={styles.fieldDiv}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Employee"
                    variant="outlined"
                    value={selected}
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
              <Grid item xs={12} sm={5} className={styles.fieldGrid}>
                <FormControl fullWidth>
                  <TextField
                    className={styles.fieldDiv}
                    id="questions"
                    fullWidth
                    size="small"
                    label="Years"
                    variant="outlined"
                    value={yearsValue}
                    onChange={yearsChangeHandle}
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={1} className={styles.fieldGrid}>
                <Button variant="contained" color="primary" className={styles.saveButton}>
                  Populate
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

    </>
  );
}
