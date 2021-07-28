
import React, { useState, useContext, useEffect } from "react";
import Sidebar from '../../containers/Sidebar'
import styles from "./Layout.module.scss";
import Grid from '@material-ui/core/Grid';
import { RootContext } from "../../context/RootContext";


export default function Layout(props) {

  const { setActiveEmployeeNames } = useContext(RootContext);

  useEffect(() => {
    employeeNamesFun();
  }, []);

  const employeeNamesFun = () => {
    var employeeNamesArr = [];
    fetch("http://attendance.devbox.co/api/v1/employees")
      .then(res => res.json())
      .then(
        (response) => {
          var abc = response.data.filter((x) => x.active)
          for (var i = 0; i < abc.length; i++) {
            employeeNamesArr.push(abc[i].name)
          }
          setActiveEmployeeNames(employeeNamesArr)
        },
        (error) => {
          console.log("error", error)
        }
      )
  }

  return (
    <>
      <main>
        <div>
          <div className={styles.flex}>
            <Grid container>
              <Grid item xs={1} sm={1} md={3}>
                <Sidebar />
              </Grid>
              <Grid item xs={12} sm={12} md={9}>
                <div className="layoutContainer">
                  {props.children}
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </>
  );
}

