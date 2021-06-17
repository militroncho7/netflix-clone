import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { NetflixButton, NetflixInput } from '../styled/styledComponents';
import { auth } from '../firebase';

const SignUp = () => {
    const classes = useStyles();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(authUser => console.log(authUser))
            .catch(error => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => console.log(authUser))
            .catch(error => alert(error.message));
    };

    return (
        <div className={classes.root}>
            <Typography variant="h5" align="left">
                Sign In
            </Typography>
            <form className={classes.form}>
                <NetflixInput
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    type="email"
                    placeholder="Email"
                    className={classes.email}
                />
                <NetflixInput
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    type="password"
                    placeholder="Password"
                    className={classes.password}
                />
                <NetflixButton
                    onClick={ signIn }
                    type="submit"
                    wide="medium"
                    radius>
                Sign In</NetflixButton>
                
                <Typography variant="subtitle2">
                    New to Netflix? {" "}
                    <span
                        className={classes.signupLink}
                        onClick={ register }
                    >
                        Sign Up now. {" "}
                    </span>
                </Typography>
            </form>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "350px",
        width: "20rem",
        height: "25rem",
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        // "& h5": {
        //     marginTop: theme.spacing(2),
        //     width: "70%",
        // }
    },
    form: {
        width: "80%",
    },
    email: {
        marginBottom: theme.spacing(2),
    },
    password: {
        marginBottom: theme.spacing(4),
    },
    signupLink: {
        color: "#FFF",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline",
            color: "#9b9b9b"
        }
    },
  }));

export default SignUp
