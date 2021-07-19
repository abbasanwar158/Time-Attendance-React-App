import React, { useState, useContext, useEffect } from "react";
import styles from "./ApplyLeave.module.scss";
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


export default function ApplyLeaves() {

  const [leaveTypes, setLeaveTypesNames] = useState([
    'Personal',
    'Compasssionate/Bereavement',
    'Long Service',
    'Paternity',
    'Bereavement',
    'Without Pay',
    'Blood Donor',
  ])

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
          <span className={styles.breadCrumbsSpan}>Leave</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Apply For Leave</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Apply For Leave</h1>
      </div>

      <div className={styles.mainCard}>
        <div className={styles.gridContainer}>
          <Grid item xs={12}>
            <Grid container spacing={1} className={styles.gridSubItems} >
              <Grid item xs={12} sm={12} className={styles.fieldGrid}>
                <FormControl fullWidth >
                  <TextField
                    id="questions"
                    fullWidth
                    size="small"
                    label="Select Leave Type"
                    variant="outlined"
                    className={styles.placeholderColor}
                    menuprops={{ variant: "menu" }}
                    select
                    SelectProps={{ IconComponent: () => <Chevron /> }}
                  >
                    {leaveTypes.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1} className={styles.gridSubItems} >
                  <Grid item xs={12} sm={12} className={styles.fieldGrid}>
                    <Grid item xs={12} sm={4}>
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
                    <Grid item xs={12} sm={4} className={styles.toGrid}>
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
              </Grid>
              <Grid item xs={12} sm={12} className={styles.fieldGrid}>
                <FormControl fullWidth>
                  <TextField
                    id="subject"
                    label="Subject"
                    type="text"
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} className={styles.fieldGrid}>
                <FormControl fullWidth>
                  <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Enter your message here......."
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} className={styles.fieldGrid}>
                <Button variant="contained" color="primary" className={styles.applyButton}>
                  Apply
                </Button>
                <Button variant="contained" color="default">
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

    </>
  );
}
