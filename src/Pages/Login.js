import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../images/netflix-logo.png';
import HeroBanner from '../images/HeroBanner.jpg';
import { NetflixButton, NetflixInput } from '../styled/styledComponents';


const Login = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt='logo' />
      <NetflixButton className={classes.sesion}>Iniciar sesión</NetflixButton>

      <div className={classes.info}>
        <Typography variant="h4" gutterBottom>
                    Unlimited films, TV programmes and more.
        </Typography>
        <Typography variant="h5">
                    Watch anywhere. Cancel at any time.
        </Typography>
        <Typography variant="h6">
                    Ready to watch ? Enter your email to create or restart your membership.
        </Typography>
        <div className={classes.inputBlock}>
          <NetflixInput />
          <NetflixButton>GET STARTERD</NetflixButton>
        </div>
      </div>
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
    },
    sesion: {
      position: "fixed",
      zIndex: 15,
      right: 20,
      top: 20,
    }
  }));
 
export default Login;