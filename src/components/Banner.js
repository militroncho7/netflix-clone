import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import HeroBanner from '../images/netflix.jpeg';

const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography variant="h2" component="h1">
                    Movie Title
                </Typography>
                <Button>Play</Button>
                <Button>My List</Button>
            </div>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${HeroBanner})`,
        position: "relative",
        height: "440px",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFF",
    },
  }));

export default Banner
