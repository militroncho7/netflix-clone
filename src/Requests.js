const API_KEY = '15fd556e3eab2682f4d2e095da24da8c';
// const API_KEY = '67d7a51db285feb1d2606724117d03c9';
//https://api.themoviedb.org/3/trending/all/week?api_key=15fd556e3eab2682f4d2e095da24da8c&language=en-US

//endpoints
const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=em-US`,
    fecthActionMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&lwith_genres=99`,
};

export default requests;
