import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react'
import logo from '../images/netflix-logo.png';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="sticky" elevation={0} className={classes.root}>
            <Toolbar>
                <img src={logo} alt="logo" className={classes.logo}/>
            </Toolbar>
        </AppBar>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#111",
        top: 0,
        left: 0,
        right: 0,
    },
    logo: {
        width: "100px",
        cursor: "pointer",
    },
  }));

export default Header
