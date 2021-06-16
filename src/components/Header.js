import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import logo from '../images/netflix-logo.png';

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const [ show, setShow ] = useState(false);

    //Función que hace transparente cuadno el usuario hace scroll
    const hideHeader = () => {
        if(window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", hideHeader);
        return () => window.removeEventListener("scroll", hideHeader);
    }, []);

    return (
        <AppBar position="sticky" elevation={0} className={`${classes.root} && ${show && classes.transparent}`}>
            <Toolbar className={classes.toolbar}>
                <IconButton onClick={() => history.push("/")}>
                    <img src={logo} alt="logo" className={classes.logo}/>
                </IconButton>
                
                <Avatar variant="square" style={{cursor:"pointer"}} onClick={()=> history.push("/profile")}/>
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
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        width: "100px",
        cursor: "pointer",
    },
  }));

export default Header
