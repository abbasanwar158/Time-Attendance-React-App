import React, { useState, useContext, useEffect } from "react";
import styles from "./ReviewDateEdit.module.scss";
import SVG from "react-inlinesvg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { RootContext } from "../../../context/RootContext";
import { useHistory } from "react-router-dom";

export default function ReviewDateEdit() {

  const { ActiveEmployeeNames, allEmployeesData, index } = useContext(RootContext);
  const [selected, setSelected] = useState('')
  const [reviewDate, setReviewDate] = useState('')
  const [reminder, setReminder] = useState('')
  const history = useHistory();

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const Chevron = () => {
    return (
      <span className={styles.dropDownCustomizeSvg}>
        <SVG src={`${process.env.PUBLIC_URL}/images/downArrow.svg`} />
      </span>
    );
  };

  useEffect(() => {
    var reviewDateToEdit = allEmployeesData[index]
    setSelected(reviewDateToEdit.name)
    setReviewDate(reviewDateToEdit.review_date)
    setReminder(reviewDateToEdit.reminder_review_date)
  }, []);

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Employees</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Edit Review</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Edit Employee Review Date</h1>
      </div>
      <div className={styles.mainCard}>
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
                  value={selected}
                  onChange={handleChange}
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
              <FormControl fullWidth>
                <TextField
                  className={styles.fieldDiv}
                  id="date"
                  label="Review Date"
                  type="date"
                  variant="outlined"
                  defaultValue="2021-07-29"
                  size="small"
                  value={reviewDate}
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
                  label="Reminder Review Date"
                  type="date"
                  variant="outlined"
                  defaultValue="2021-07-29"
                  size="small"
                  value={reminder}
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
              <Button variant="contained" color="primary" className={styles.saveButton}>
                Update
              </Button>
              <Button
                variant="contained"
                color="default"
                onClick={(e) => history.push('/employees/review_date')}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>

    </>
  );
}
