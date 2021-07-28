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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  debugger;
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
        <SVG className={styles.sidebarToggleBtn} onClick={handleClickOpen} src={`${process.env.PUBLIC_URL}/images/sidebartoggle.svg`} />
      </div>

      <div>
        <Dialog fullScreen open={open} className={styles.sidebar} onClose={handleClose} TransitionComponent={Transition}>
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
          <Sidebar fromNavbar={true} />
        </Dialog>
      </div>
    </>

  );
}