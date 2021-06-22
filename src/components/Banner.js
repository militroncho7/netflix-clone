import { Button, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HeroBanner from '../images/netflix.jpeg';
import requests from '../Requests';

const Banner = () => {
    const classes = useStyles();
    const [ movie, setMovie ] = useState([]);
    //función para acortar la descripcion de la API y añadir "..." al final
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)} ...` : string
    
    //Llamada a la API: para la imagen aleatoria del Banner
    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            //esto genera un array de peliculas en request.data.reslts
            
            //Generamos un numero random entre 0 y la longitud del array (un indice aleatorio)
            const random = Math.floor(Math.random()*request.data.results.length - 1);
            //Mostraremos en pantalla requets.data.results[random]
            setMovie(requests.data.results[random])
            return request;
        }
        return fetchData();
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography variant="h2" component="h1">
                    Movie Title
                </Typography>

                <Typography style={{wordWrap: "break-word"}} variant="h6" className={classes.description}>
                    {
                        truncate("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,", 160)
                    }
                </Typography>

                <div className={classes.buttons}>
                    <Button>Play</Button>
                    <Button>My List</Button>
                </div>

                <div className={classes.fadeBottom} />
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
        },
        "& button:hover": {
            color: "#000",
            backgroundColor: "#e6e6e6",
        },
    },
    fadeBottom: {
        position: "absolute",
        top: "30vh",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundImage: "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
    }
  }));

export default Banner
