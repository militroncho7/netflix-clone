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
                <div className={classes.buttons}>
                    <Button>Play</Button>
                    <Button>My List</Button>
                </div>
                
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
    buttons: {
        "& button": {
            cursor: "pointer",
            color: "#FFF",
            fontWeight: 700,
            borderRadius: "5px",
            padding: theme.spacing(1, 4, 1, 4),
            marginRight: "1rem",
            backgroundColor: "rgba(51,51,51, 0.5)",
        }
    }
  }));

export default Banner
