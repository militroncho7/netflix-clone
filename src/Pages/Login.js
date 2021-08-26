import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import logo from '../images/netflix-logo.png';
import HeroBanner from '../images/HeroBanner.jpg';
import { NetflixButton, NetflixInput } from '../styled/styledComponents';
import SignUp from '../Pages/SignUp';


const Login = () => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [ singIn, setSingIn ] = useState(false);
  
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt='logo' />
      <NetflixButton className={classes.sesion}>Iniciar sesión</NetflixButton>

      <div className={classes.info}>
        {
          !singIn ? (<SignUp />) : (
          <>
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
              <NetflixInput placeholder='Email address'/>
              <NetflixButton wide="small">GET STARTERD</NetflixButton>
            </div>
          </>
          )
        }
        

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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      position: "fixed",
      top: 0,
      left: 20,
      width: "150px",
      cursor: "pointer",
    },
    sesion: {
      position: "fixed",
      zIndex: 15,
      right: 20,
      top: 20,
    },
    info: {
      color: "#FFF",
      zIndex: 15,
      textAlign: "center",
      "& h4": {
        fontWeight: 800,
      },
      "& h5": {
        fontWeight: 400,
      },
    },
  }));
 
export default Login;