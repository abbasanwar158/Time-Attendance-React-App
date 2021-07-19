import React, { useState, useContext, useEffect } from "react";
import styles from "./AllEmployees.module.scss";
import SVG from "react-inlinesvg";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function AllEmployees() {

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Employees</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>View</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>View All Employees</h1>
      </div>
      <div className={styles.mainCard}>
        <TableContainer component={Paper} className={styles.table}>
          <Table aria-label="simple table">
            <TableHead className={styles.tableHeader}>
              <TableRow>
                <TableCell className={styles.TableCell}>Id</TableCell>
                <TableCell className={styles.TableCell} >Employee External ID</TableCell>
                <TableCell className={styles.TableCell} >CNIC</TableCell>
                <TableCell className={styles.TableCell} >Name</TableCell>
                <TableCell className={styles.TableCell} >Email</TableCell>
                <TableCell className={styles.TableCell} >Joining Date</TableCell>
                <TableCell className={styles.TableCell} >Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" className={styles.nameCells}>
                </TableCell>
                <TableCell component="th" scope="row" className={styles.nameCells}>
                </TableCell>
                <TableCell alignjustifyContent="center" className={styles.subCells}></TableCell>
                <TableCell alignjustifyContent="center" className={styles.subCells}></TableCell>
                <TableCell alignjustifyContent="center" className={styles.subCells}></TableCell>
                <TableCell alignjustifyContent="center" className={styles.subCells}></TableCell>
                <TableCell alignjustifyContent="center" className={styles.subCells}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>
  );
}
