import React, { useState, useContext, useEffect } from "react";
import styles from "./ViewAttendance.module.scss";
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


export default function Attendance() {

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Attendance</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>View</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>View today's attendance</h1>
      </div>
      <div className={styles.mainCard}>
        <TableContainer component={Paper} className={styles.table}>
          <Table aria-label="simple table">
            <TableHead className={styles.tableHeader}>
              <TableRow>
                <TableCell className={styles.TableCell}>Picture</TableCell>
                <TableCell className={styles.TableCell} >Name</TableCell>
                <TableCell className={styles.TableCell} >Checkin</TableCell>
                <TableCell className={styles.TableCell} >Checkout</TableCell>
                <TableCell className={styles.TableCell} >Time Spend</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <TableRow>
                <TableCell component="th" scope="row" className={styles.nameCells}>
                </TableCell>
                <TableCell alignjustifyContent = "center" className={styles.subCells}></TableCell>
                <TableCell alignjustifyContent = "center" className={styles.subCells}></TableCell>
                <TableCell alignjustifyContent = "center" className={styles.subCells}></TableCell>
                <TableCell alignjustifyContent = "center" className={styles.subCells}></TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>
  );
}
