import React, { useState, useContext, useEffect } from "react";
import SVG from "react-inlinesvg";
import styles from "./Sidebar.module.scss";
import { useHistory, withRouter } from "react-router-dom";
import Collapse from '@material-ui/core/Collapse';


export default function Sidebar() {
  const [colExpAttendance, setColExpAttendance] = useState(false)
  const history = useHistory();
  const [colExpLeaves, setColExpLeaves] = useState(false)
  const [colExpEmployees, setColExpEmployees] = useState(false)
  const [colExpHolidays, setColExpHolidays] = useState(false)
  const [checkedAtt, setCheckedAtt] = useState(false);
  const [checkedLeave, setCheckedLeave] = useState(false);
  const [checkedEmp, setCheckedEmp] = useState(false);
  const [checkedHol, setCheckedHol] = useState(false);
  const { activeRoute, setActiveRoute } = useState(null);

  const [attendanceSubMenu, setAttendanceSubMenu] = useState([
    'View Today Attendance',
    'Manage Attendance Manually',
    'Attendance Report',
    'Upload Attendances',
    'Email Attendances'
  ])
  const [attendanceUrl, setAttendanceUrl] = useState([
    '/attendance',
    '/attendance/new',
    '/attendance/report',
    '/attendance/upload',
    '/attendance/email'
  ])

  const [leavesUrl, setLeavesUrl] = useState([
    '/leaves',
    '/leaves/apply',
    '/leaves/new',
    '/leaves/report',
    '/leaves/schedule',
    '/leaves/upload'
  ])
  const [employeesUrl, setEmployeesUrl] = useState([
    '/employees',
    '/employees/active',
    '/employees/edit_status',
    '/employee/new',
    '/employees/upload'
  ])
  const [holidaysUrl, setHolidaysUrl] = useState([
    '/holidays',
    '/holiday/new'
  ])
  const [attendanceSubMenuSVG, setAttendanceSubMenuSVG] = useState([
    'visibility',
    'settings',
    'description',
    'publish',
    'mail'
  ])

  const [leavesSubMenu, setLeavesSubMenu] = useState([
    'View Leaves',
    'Apply Leaves',
    'Add New Leave',
    'Leave Report',
    'Leaves WBS',
    'Upload Leaves'
  ])
  const [leavesSubMenuSVG, setLeavesSubMenuSVG] = useState([
    'visibility',
    'assignment',
    'add_to_queue',
    'description',
    'storage',
    'publish'
  ])

  const [employeesSubMenu, setEmployeesSubMenu] = useState([
    'All Employees',
    'Active Employees',
    'Edit Employee Status',
    'Add New Employee',
    "Upload Employees's Data"
  ])
  const [employeesSubMenuSVG, setEmployeesSubMenuSVG] = useState([
    'people',
    'person',
    'edit',
    'person_add',
    'publish',
  ])

  const [holidaysSubMenu, setHolidaysSubMenu] = useState([
    'View Holidays',
    'Add New Holiday'
  ])
  const [holidaysSubMenuSVG, setHolidaysSubMenuSVG] = useState([
    'visibility',
    'add_to_queue'
  ])

  const collapseFun = (e) => {
    var clicked = e.currentTarget.childNodes[1].textContent;
    switch (clicked) {
      case 'Attendance':
        setCheckedAtt((prev) => !prev);
        var abc = colExpAttendance;
        if (abc) {
          setColExpAttendance(false)
        }
        else {
          setColExpAttendance(true)
        }
        break;
      case 'Leaves':
        setCheckedLeave((prev) => !prev);
        var abc = colExpLeaves;
        if (abc) {
          setColExpLeaves(false)
        }
        else {
          setColExpLeaves(true)
        }
        break;
      case 'Employees':
        setCheckedEmp((prev) => !prev);
        var abc = colExpEmployees;
        if (abc) {
          setColExpEmployees(false)
        }
        else {
          setColExpEmployees(true)
        } break;
      case 'Holidays':
        setCheckedHol((prev) => !prev);
        var abc = colExpHolidays;
        if (abc) {
          setColExpHolidays(false)
        }
        else {
          setColExpHolidays(true)
        } break;
      default:
    }

  }

  return (
    <div className={`${styles.container}`}>
      <div className={styles.positionSidebar}>
        <div className={styles.dashboardDiv} onClick={() => history.push('/dashboard')}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/dashboard.svg`} />
          <span className={styles.dashboardText}>Dashboard</span>
        </div>
        <div className={styles.dashboardDiv2} onClick={collapseFun}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/attendance.svg`} />
          <span className={styles.dashboardText}>Attendance</span>
          {
            colExpAttendance ?
              <SVG
                className={styles.collapseSvg}
                src={`${process.env.PUBLIC_URL}/images/minus_circle.svg`}
              /> :
              <SVG
                className={styles.collapseSvg}
                src={`${process.env.PUBLIC_URL}/images/plus_circle.svg`}
              />
          }

        </div>

        {/* Attendace Expandabel Section Start */}
        <Collapse in={checkedAtt}>
          <div className={styles.SubMenusContainer}>
            {
              attendanceSubMenu.map((x, i) => {
                return (
                  <div className={styles.dashboardSubMenuDiv} onClick={() => history.push(`${attendanceUrl[i]}`)}>
                    <SVG
                      className={styles.dashboardSvgSubMenu}
                      src={`${process.env.PUBLIC_URL}/images/${attendanceSubMenuSVG[i]}.svg`}
                    />
                    <span className={styles.dashboardTextSubMenu}>{x}</span>
                  </div>
                )
              })
            }
          </div>
        </Collapse>
        {/* Attendace Expandabel Section End */}


        <div
          className={styles.dashboardDiv2}
          onClick={collapseFun}>
          <SVG
            className={styles.dashboardSvg}
            src={`${process.env.PUBLIC_URL}/images/leaves.svg`}
          />
          <span className={styles.dashboardText}>Leaves</span>
          {
            colExpLeaves ?
              <SVG
                className={styles.collapseSvg}
                src={`${process.env.PUBLIC_URL}/images/minus_circle.svg`}
              /> :
              <SVG
                className={styles.collapseSvg}
                src={`${process.env.PUBLIC_URL}/images/plus_circle.svg`}
              />
          }
        </div>

        {/* Leaves Expandabel Section Start */}
        <Collapse in={checkedLeave}>
          <div className={styles.SubMenusContainer} >
            {
              leavesSubMenu.map((x, i) => {
                return (
                  <div className={styles.dashboardSubMenuDiv} onClick={() => history.push(`${leavesUrl[i]}`)}>
                    <SVG
                      className={styles.dashboardSvgSubMenu}
                      src={`${process.env.PUBLIC_URL}/images/${leavesSubMenuSVG[i]}.svg`}
                    />
                    <span className={styles.dashboardTextSubMenu}>{x}</span>
                  </div>
                )
              })
            }
          </div>
        </Collapse>
        {/* Leaves Expandabel Section End */}
        <div
          className={styles.dashboardDiv2}
          onClick={collapseFun}>
          <SVG
            className={styles.dashboardSvg}
            src={`${process.env.PUBLIC_URL}/images/employees.svg`}
          />
          <span className={styles.dashboardText}>Employees</span>
          {
            colExpEmployees ?
              <SVG
                className={styles.collapseSvg}
                src={`${process.env.PUBLIC_URL}/images/minus_circle.svg`}
              /> :
              <SVG
                className={styles.collapseSvg}
                src={`${process.env.PUBLIC_URL}/images/plus_circle.svg`}
              />
          }
        </div>
        {/* Employees Expandabel Section Start */}
        <Collapse in={checkedEmp}>
          <div className={styles.SubMenusContainer}>
            {
              employeesSubMenu.map((x, i) => {
                return (
                  <div className={styles.dashboardSubMenuDiv} onClick={() => history.push(`${employeesUrl[i]}`)}>
                    <SVG
                      className={styles.dashboardSvgSubMenu}
                      src={`${process.env.PUBLIC_URL}/images/${employeesSubMenuSVG[i]}.svg`}
                    />
                    <span className={styles.dashboardTextSubMenu}>{x}</span>
                  </div>
                )
              })
            }
          </div>
        </Collapse>
        {/* Employees Expandabel Section End */}
        <div
          className={styles.dashboardDiv2}
          onClick={collapseFun}>
          <SVG
            className={styles.dashboardSvg}
            src={`${process.env.PUBLIC_URL}/images/holidays.svg`}
          />
          <span className={styles.dashboardText}>Holidays</span>
          {
            colExpHolidays ?
              <SVG
                className={styles.collapseSvg}
                src={`${process.env.PUBLIC_URL}/images/minus_circle.svg`}
              /> :
              <SVG
                className={styles.collapseSvg}
                src={`${process.env.PUBLIC_URL}/images/plus_circle.svg`}
              />
          }
        </div>
        {/* Holidays Expandabel Section Start */}
        <Collapse in={checkedHol}>
          <div className={styles.SubMenusContainer}>
            {
              holidaysSubMenu.map((x, i) => {
                return (
                  <div className={styles.dashboardSubMenuDiv} onClick={() => history.push(`${holidaysUrl[i]}`)}>
                    <SVG
                      className={styles.dashboardSvgSubMenu}
                      src={`${process.env.PUBLIC_URL}/images/${holidaysSubMenuSVG[i]}.svg`}
                    />
                    <span className={styles.dashboardTextSubMenu}>{x}</span>
                  </div>
                )
              })
            }
          </div>
        </Collapse>
        {/* Holidays Expandabel Section End */}
      </div>
    </div >
  );
}