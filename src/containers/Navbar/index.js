import React, { useState, useContext, useEffect } from "react";
import styles from "./Navbar.module.scss";
import SVG from "react-inlinesvg";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Sidebar from "../Sidebar";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Navbar() {

  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false)
  const [anchorEl, setMenu] = useState(null);
  const history = useHistory();


  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };


  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <img
            className={styles.logo}
            width="150px"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
          />
        </div>
        <SVG className={styles.userMenuBtn} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} src={`${process.env.PUBLIC_URL}/images/profile.svg`} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          className={styles.menuPosition}
        >
          <MenuItem
            onClick={() => {
              handleCloseMenu()
              history.push('/users/new')
            }}
          >
            <SVG className={styles.subMenuIcons} src={`${process.env.PUBLIC_URL}/images/people.svg`} />
            <span className={styles.subMenuSpan}>Manage Users</span>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleCloseMenu()
              history.push('/employees/review_date')
            }}
          >
            <SVG className={styles.subMenuIcons} src={`${process.env.PUBLIC_URL}/images/dateRange.svg`} />
            <span className={styles.subMenuSpan}>Employee Review Date</span>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleCloseMenu()
              history.push('/users/new')
            }}>
            <SVG className={styles.subMenuIcons} src={`${process.env.PUBLIC_URL}/images/timer.svg`} />
            <span className={styles.subMenuSpan}>Employee Reports</span>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleCloseMenu()
              history.push('/users/new')
            }}>
            <SVG className={styles.subMenuIcons} src={`${process.env.PUBLIC_URL}/images/assignment.svg`} />
            <span className={styles.subMenuSpan}>Leave Requests</span>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleCloseMenu()
              history.push('/users/new')
            }}>
            <SVG className={styles.subMenuIcons} src={`${process.env.PUBLIC_URL}/images/assessment.svg`} />
            <span className={styles.subMenuSpan}>Employee Performace Form</span>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleCloseMenu()
              history.push('/users/new')
            }}>
            <SVG className={styles.subMenuIcons} src={`${process.env.PUBLIC_URL}/images/mail.svg`} />
            <span className={styles.subMenuSpan}>Mail to all employees</span>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleCloseMenu()
              history.push('/users/new')
            }}>
            <SVG className={styles.subMenuIcons} src={`${process.env.PUBLIC_URL}/images/lock.svg`} />
            <span className={styles.subMenuSpan}>Logout</span>
          </MenuItem>

        </Menu>
        <SVG className={styles.sidebarToggleBtn} onClick={handleClickOpen} src={`${process.env.PUBLIC_URL}/images/sidebartoggle.svg`} />
      </div>

      <div>
        <Dialog fullScreen open={modalOpen} className={styles.sidebar} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Sidebar
              </Typography>
            </Toolbar>
          </AppBar>
          <Sidebar fromNavbar={true} setModalOpen={setModalOpen} />
        </Dialog>
      </div>
    </>

  );
}