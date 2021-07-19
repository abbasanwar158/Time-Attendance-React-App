import React, { useState, useContext, useEffect } from "react";
import styles from "./UploadLeaves.module.scss";
import SVG from "react-inlinesvg";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from "@material-ui/core/FormControl";

export default function UploadLeaves() {

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Leaves</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Upload</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Upload Leaves</h1>
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
    </>
  );
}
