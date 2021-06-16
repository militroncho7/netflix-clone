import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import logo from '../images/netflix-logo.png';

const Header = () => {
    const classes = useStyles();
    const [ show, setShow ] = useState(false);

    //Función que hace transparente cuadno el usuario hace scroll
    const hideHeader = () => {
        if(window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", hideHeader)
    }, []);

    return (
        <AppBar position="sticky" elevation={0} className={`${classes.root} && ${show && classes.transparent}`}>
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
    transparent: {
        backgroundColor: "transparent"
    },
    logo: {
        width: "100px",
        cursor: "pointer",
    },
  }));

export default Header
