import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../Requests';


const Home = () => {
  // const classes = useStyles();
  
  return (
    <div>
      <Header />

      <Banner />

      {/* PRINCIPAL */}
      <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
      />

      {/* POR CATEGORÍA */}
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fecthActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES MOVIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>);
};
 
export default Home;
