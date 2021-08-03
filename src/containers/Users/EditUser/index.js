import React, { useState, useContext, useEffect } from "react";
import styles from "./EditUser.module.scss";
import SVG from "react-inlinesvg";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { RootContext } from "../../../context/RootContext";
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useHistory } from "react-router-dom";



export default function ManageUsers() {


  const [values, setValues] = useState({ showPassword: false, });
  const [valuesConfirm, setValuesConfirm] = useState({ showPasswordConfirm: false, });
  const { usersData, index } = useContext(RootContext);
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeConfirm = (prop) => (event) => {
    setValuesConfirm({ ...valuesConfirm, [prop]: event.target.value });
  };

  const handleClickShowPasswordConfirm = () => {
    setValuesConfirm({ ...valuesConfirm, showPasswordConfirm: !valuesConfirm.showPasswordConfirm });
  };

  const handleMouseDownPasswordConfirm = (event) => {
    event.preventDefault();
  };


  useEffect(() => {
    var userDataForEdit = usersData[index]
    setName(userDataForEdit.name)
    setUsername(userDataForEdit.username)
    debugger
  }, []);

  return (
    <>
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbsSubContainer}>
          <SVG className={styles.dashboardSvg} src={`${process.env.PUBLIC_URL}/images/holidays.svg`} />
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>User</span>
          <span className={styles.breadCrumbsSlash}>/</span>
          <span className={styles.breadCrumbsSpan}>Edit</span>
        </div>
        <h1 className={styles.breadCrumbSpan2}>Edit User</h1>
      </div>
      <div className={styles.mainCard}>
        <div className={styles.flex}>
          <h2 className={styles.createHeading}>Create New Account</h2>
        </div>

        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl fullWidth >
                <TextField
                  className={styles.fieldDiv}
                  id="subject"
                  label="User Name"
                  type="email"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Your Email"
                  value={username}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl fullWidth >
                <TextField
                  className={styles.fieldDiv}
                  id="subject"
                  label="Name"
                  type="email"
                  variant="outlined"
                  size="small"
                  placeholder="Enter Your Name"
                  value={name}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>

              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  className={styles.fieldDiv}
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>

            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                  className={styles.fieldDiv}
                  id="outlined-adornment-password"
                  type={valuesConfirm.showPasswordConfirm ? 'text' : 'password'}
                  value={valuesConfirm.password}
                  onChange={handleChangeConfirm('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordConfirm}
                        onMouseDown={handleMouseDownPasswordConfirm}
                        edge="end"
                      >
                        {valuesConfirm.showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1} className={styles.gridSubItems} >
            <Grid item xs={12} sm={4} className={styles.fieldGrid}>
              <FormControl >
                <FormControlLabel
                  className={styles.satSunCheckbox}
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="Check if admin"
                  labelPlacement="end"
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
            </Grid>
          </Grid>
        </Grid>
      </div>

    </>
  );
}
