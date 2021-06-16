import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import netflixavatar from '../images/netflixavatar.png';

const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Typography variant="h3">Edit Profile</Typography>
            <div className={classes.info}>
                <img src={netflixavatar} alt="avatar" />
            </div>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    },
  }));

export default Profile
