import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Plans from '../components/Plans';
import { auth } from '../firebase';
import netflixavatar from '../images/netflixavatar.png';
import { NetflixButton } from '../styled/styledComponents';

const Profile = () => {
    const classes = useStyles();
    const history = useHistory();

    const signout = () => {
        auth.signOut(); //Logout de firebase
        history.push('/login'); //redireccionar la pagina a login page
    };

    return (
        <div className={classes.root}>
            <Header />
            <Typography variant="h3">Edit Profile</Typography>
                <div className={classes.info}>
                     <img src={netflixavatar} alt="avatar" />
                    <div className={classes.details}>
                    <div className={classes.plans}>
                        <Typography variant="h6">email usuario</Typography>
                        <Typography className={classes.plansText} variant="h5" gutterBottom>Plans</Typography>

                        <Plans cost={7.99}>Netflix Standard - <b>7.99€</b></Plans>
                        <Plans cost={11.99}>Netflix Basic - <b>11.99€</b></Plans>
                        <Plans wide="medium" color="gray" cost={15.99}>Netflix Premium - <b>15.99€</b></Plans>

                        <NetflixButton onClick={ signout } wide="fullwidth">Sign Out</NetflixButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#FFF",
        minHeight: "100vh",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    info: {
        width: "50%",
        display: "flex",
        "& img": {
            height: "100px",
            [theme.breakpoints.down("xs")] : {
                display: "none"
            }
        }
    },
    details: {
        width: "100%",
        marginLeft: theme.spacing(3),
        "& h6": {
            backgroundColor: "#AAA",
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: "18px",
        }
    },
    plans: {
        width: "100%",
    },
    plansText: {
        borderBottom: "1px solid lightgray",
    },
  }));

export default Profile
