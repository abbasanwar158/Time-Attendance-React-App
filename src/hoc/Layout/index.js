
import React, { useState, useContext, useEffect } from "react";
import Sidebar from '../../containers/Sidebar'
import styles from "./Layout.module.scss";
import Grid from '@material-ui/core/Grid';

export default function Layout(props) {
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

