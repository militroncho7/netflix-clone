import { makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../images/netflix-logo.png';
import HeroBanner from '../images/HeroBanner.jpg';

const Login = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt='logo' />  
    </div>);
};

const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      height: "100vh",
      backgroundImage: `url(${HeroBanner})`,
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    logo: {
      position: "fixed",
      top: 0,
      left: 20,
      width: "150px",
      cursor: "pointer"
    }
  }));
 
export default Login;