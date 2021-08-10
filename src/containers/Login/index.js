import React, { useState, useContext, useEffect } from "react";
import styles from "./Login.module.scss";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import { useHistory, withRouter } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import { RootContext } from "../../context/RootContext";

export default function Login() {
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [username, setUsername] = useState('')
  const history = useHistory();
  const [alert, setAlert] = useState(false)
  const { setCurrentUser } = useContext(RootContext);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const usenameFun = (event) => {
    setUsername(event.target.value)
  }

  const loginUser = () => {
    fetch(`http://attendance.devbox.co/api/v1/login?username=${username}&password=${values.password}`)
      .then(res => res.json())
      .then(
        (response) => {
          if (response.status == 'Success') {
            history.push('/dashboard')
            setCurrentUser(response.data.username)
          }
          else {
            setAlert(true)
          }
        },
        (error) => {
          console.log("error", error)
        }
      )
  }

  return (
    <>{alert ?
      <Alert
        severity="warning"
        onClose={() => {
          setAlert(false)
        }}
      >
        The username or password is incorrect --- try again please
      </Alert>
      : null}
      <div className={styles.flexContainer}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <h4 className={styles.heading}>Login to access your Account</h4>
          </div>
          <div className={styles.mainDiv}>
            <p> User name </p>
            <TextField
              className={styles.fieldsWidth}
              id="outlined-password-input"
              label="Email"
              type="text"
              autoComplete="current-password"
              variant="outlined"
              value={username}
              onChange={usenameFun}
            />
            <p> Password </p>
            <FormControl variant="outlined" className={styles.fieldsWidth}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
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
            <Button className={styles.loginButton} onClick={loginUser} variant="contained" color="primary">
              Login
            </Button>
            <div className={styles.resetAnchor}>
              <a href="#">Reset Password</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
