import React, { useState, useContext, useEffect } from "react";
import styles from "./ActiveEmployees.module.scss";
import SVG from "react-inlinesvg";
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

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Employees</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Active</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>View Active Employees</h1>
      </div>

      <div className={styles.mainCard} >

        <Grid item xs={12}>
          <Grid container spacing={2} className={styles.gridSubItems} >
            {employeeNames.map((x, i) => {
              return (
                <Grid item xs={12} sm={4} className={styles.fieldGrid}>
                  <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                      <div className={styles.flipCardFront}>
                        <img
                          className={styles.cardImg}
                          height="120px"
                          width="120px"
                          src={`${process.env.PUBLIC_URL}/images/devbox.png`}
                        />
                        <h2>{x}</h2>
                        <p>Associate PM</p>
                      </div>
                      <div className={styles.flipCardBack}>
                        <h1>Suleman Jalil</h1>
                        <p>Improves operations by conducting systems analysis and recommending changes in policies and procedures.</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Grid>




      </div>

    </>
  );
}
