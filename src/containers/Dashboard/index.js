import React, { useState, useContext, useEffect } from "react";
import styles from "./Dashboard.module.scss";
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
import { useHistory, withRouter } from "react-router-dom";
import { RootContext } from "../../context/RootContext";


export default function Dashboard() {

  const history = useHistory();
  const [months, setMonths] = useState('');
  const [years, setYears] = useState('');
  const [onLeave, setOnLeave] = useState('');
  const [presentEmp, setPresentEmp] = useState('');
  const [holidayName, setholidayName] = useState('');
  const [holidayDate, setHolidayDate] = useState('');
  const [noHoliday, setNoHoliday] = useState(false);
  const [leavesInformation, setLeavesInformation] = useState([]);
  const [hoursInformation, setHoursInformation] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { ActiveEmployeeNames } = useContext(RootContext);
  const [optionsMonths, setOptionsMonths] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ])
  const [optionsYears, setOptionsYears] = useState(['2021', '2020', '2019', '2018', '2017'])

  const handleChangeMonths = (event) => {
    setMonths(event.target.value);
  };

  const handleChangeYears = (event) => {
    setYears(event.target.value);
  };

  const handleChangeStartDate = (event) => {
    setStartDate(event.target.value);
  }

  const handleChangeEndDate = (event) => {
    setEndDate(event.target.value);
  }
  const Chevron = () => {
    return (
      <span className={styles.dropDownCustomizeSvg}>
        <SVG src={`${process.env.PUBLIC_URL}/images/downArrow.svg`} />
      </span>
    );
  };

  useEffect(() => {
    welcomeInfo();
    leavesInfo();
    hoursInfo();
  }, []);


  const leavesInfo = () => {
    var leavesInfoArr = [];
    fetch(`http://attendance.devbox.co/api/v1/leave_information?month=${months}&year=${years}`)
      .then(res => res.json())
      .then(
        (response) => {
          var data = response.data
          for (var i = 0; i < data.length; i++) {
            leavesInfoArr.push(data[i])
          }
          setLeavesInformation(leavesInfoArr)
        },
        (error) => {
          console.log("error", error)
        }
      )
  }

  const hoursInfo = () => {
    var hoursInfoArr = [];
    fetch(`http://attendance.devbox.co/api/v1/hour_information?start_date=${startDate}&end_date=${endDate}`)
      .then(res => res.json())
      .then(
        (response) => {
          var data = response.data
          for (var i = 0; i < data.length; i++) {
            hoursInfoArr.push(data[i])
          }
          setHoursInformation(hoursInfoArr)
        },
        (error) => {
          console.log("error", error)
        }
      )
  }

  const welcomeInfo = () => {
    fetch("http://attendance.devbox.co/api/v1/welcome")
      .then(res => res.json())
      .then(
        (response) => {
          setOnLeave(response.on_leave_employees)
          setPresentEmp(response.present_employees)
          if (response.holiday == null) {
            setNoHoliday(true)
          }
          else {
            setholidayName(response.holiday.occasion)
            setHolidayDate(response.holiday.date)
          }
        },
        (error) => {
          console.log("error", error)
        }
      )
  }
  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>DASHBOARD</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Dashboard</h1>
      </div>
      <div>
      </div>
      <Grid item xs={12}>
        <Grid container spacing={3} className={styles.gridSubItems} >
          <Grid item xs={12} sm={12} md={4}>
            <div className={`${styles.card}`} onClick={() => history.push('/leaves')}>
              <div className={`${styles.cardLeaves}`}>
                <div className={styles.cardHeaderText}>
                  On Leave
                  <SVG className={`${styles.cardSvg}`} src={`${process.env.PUBLIC_URL}/images/leaves.svg`} />
                </div>
                <div className={` ${styles.cardBody}`}>
                  <span className={styles.cardBodyText}>{onLeave}/{ActiveEmployeeNames.length}</span>
                  <SVG className={`${styles.cardSvg}`} src={`${process.env.PUBLIC_URL}/images/rightArrow.svg`} />
                </div>
              </div>
            </div>
          </Grid>


          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.card} onClick={() => history.push('/employees')}>
              <div className={`${styles.cardEmployees}`}>
                <div className={styles.cardHeaderText}>
                  Present Employees
                  <SVG className={`${styles.cardSvg}`} src={`${process.env.PUBLIC_URL}/images/people.svg`} />
                </div>
                <div className={` ${styles.cardBody}`}>
                  <span className={styles.cardBodyText}>{presentEmp}/{ActiveEmployeeNames.length}</span>
                  <SVG className={`${styles.cardSvg}`} src={`${process.env.PUBLIC_URL}/images/rightArrow.svg`} />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={`${styles.card}`} onClick={() => history.push('/holidays')}>
              <div className={`${styles.cardHolidays}`}>
                <div className={styles.cardHeaderText}>
                  Up Comming Holiday
                  <SVG className={`${styles.cardSvg}`} src={`${process.env.PUBLIC_URL}/images/event.svg`} />
                </div>
                <div className={` ${styles.cardBody}`}>
                  {noHoliday ?
                    <span className={styles.cardBodyTextHoliday}>No Upcoming Holiday</span>
                    :
                    <div>
                      <p className={styles.holidaysInfo}>{holidayName}</p>
                      <p className={styles.holidaysInfo}>{holidayDate}</p>
                    </div>
                  }
                  <SVG className={`${styles.cardSvg}`} src={`${process.env.PUBLIC_URL}/images/rightArrow.svg`} />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3} className={styles.gridSubItems} >
          <Grid item xs={12} sm={6}>
            <div className={styles.leaveInfoCard}>
              <div className={`${styles.cardHeader}`}>
                <h2 className="text-muted fw-normal">Leaves Information</h2>
              </div>
              <Grid item xs={12}>
                <Grid container spacing={1} className={styles.gridSubItems} >
                  <Grid item xs={12} sm={5}>
                    <div>
                      <FormControl fullWidth>
                        <TextField
                          id="questions"
                          fullWidth
                          size="small"
                          label="Months"
                          variant="outlined"
                          value={months}
                          className={styles.placeholderColor}
                          onChange={handleChangeMonths}
                          menuprops={{ variant: "menu" }}
                          select
                          SelectProps={{ IconComponent: () => <Chevron /> }}
                        >
                          {optionsMonths.map((option, i) => (

                            <MenuItem key={option} value={i + 1}>
                              {option}
                            </MenuItem>

                          ))}
                        </TextField>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <div>
                      <FormControl fullWidth>
                        <TextField
                          id="questions"
                          fullWidth
                          size="small"
                          label="Years"
                          variant="outlined"
                          onChange={handleChangeYears}
                          value={years}
                          className={styles.placeholderColor}
                          menuprops={{ variant: "menu" }}
                          select
                          SelectProps={{ IconComponent: () => <Chevron /> }}
                        >
                          {optionsYears.map((option) => (

                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>

                          ))}
                        </TextField>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.cardButtons}
                      onClick={leavesInfo}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <TableContainer component={Paper} className={styles.table}>
                <Table aria-label="simple table">
                  <TableHead className={styles.tableHeader}>
                    <TableRow>
                      <TableCell className={styles.TableCell}>Employee Name</TableCell>
                      <TableCell className={styles.TableCell} >Full Leaves</TableCell>
                      <TableCell className={styles.TableCell} >Half Leaves</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {leavesInformation.map((row) => (
                      <TableRow>
                        <TableCell component="th" scope="row" className={styles.nameCells}>
                          {row.name}
                        </TableCell>
                        <TableCell className={styles.subCells}>{row.full}</TableCell>
                        <TableCell className={styles.subCells}>{row.half}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>



            <div className={styles.leaveInfoCard}>
              <div className={`${styles.cardHeader}`}>
                <h2>Hours Information</h2>
              </div>
              <Grid item xs={12}>
                <Grid container spacing={1} className={styles.gridSubItems} >
                  <Grid item xs={12} sm={5}>
                    <div>
                      <FormControl fullWidth>
                        <TextField
                          id="date"
                          label="Start Date"
                          type="date"
                          variant="outlined"
                          size="small"
                          value={startDate}
                          onChange={handleChangeStartDate}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <div>
                      <FormControl fullWidth>
                        <TextField
                          id="date"
                          label="End Date"
                          type="date"
                          variant="outlined"
                          size="small"
                          value={endDate}
                          onChange={handleChangeEndDate}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.cardButtons}
                      onClick={hoursInfo}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <TableContainer component={Paper} className={styles.table}>
                <Table aria-label="simple table">
                  <TableHead className={styles.tableHeader}>
                    <TableRow>
                      <TableCell className={styles.TableCell} >Employee Name</TableCell>
                      <TableCell className={styles.TableCell} >Time Spend</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {hoursInformation.map((row) => (
                      <TableRow>
                        <TableCell component="th" scope="row" className={styles.nameCells}>
                          {row.name}
                        </TableCell>
                        <TableCell className={styles.subCells}>{row.hour} hours and {row.min} minutes</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid >
        </Grid >
      </Grid >


    </>
  );
}
