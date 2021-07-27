import React, { useState, useContext, useEffect } from "react";
import styles from "./UploadAttendance.module.scss";
import SVG from "react-inlinesvg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { RootContext } from "../../../context/RootContext";

export default function UploadAttendance() {

  const { ActiveEmployeeNames } = useContext(RootContext);


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
          <span className={styles.breadCrumbsSpan}>Upload</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Upload attendance</h1>
      </div>
      <div className={styles.mainCard}>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={3} className={styles.fieldGrid}>
              <FormControl fullWidth>
                <input
                  id="hero1"
                  className={styles.heroInput}
                  type={"file"}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={3} className={styles.fieldGrid}>
              <Button size="small" variant="contained" color="primary" className={styles.uploadButton}>
                Upload
              </Button>
              <Button size="small" variant="contained" color="default">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={styles.mainCard2}>
        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl fullWidth>
                <TextField
                  className={styles.fieldDiv}
                  id="questions"
                  fullWidth
                  size="small"
                  label="Employee"
                  variant="outlined"
                  menuprops={{ variant: "menu" }}
                  select
                  SelectProps={{ IconComponent: () => <Chevron /> }}
                >
                  {ActiveEmployeeNames.map((option) => (
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
              <FormControl >
                <FormControlLabel
                  className={styles.allCheckbox}
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="ALL"
                  labelPlacement="end"
                />
              </FormControl>
              <Button size="small" variant="contained" color="secondary" className={styles.uploadButton}>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>

    </>
  );
}
