import axios from 'axios';

//--------FIREBASE--------

const apiFirebase = axios.create({
    baseURL:'https://tmdb3-48b40-default-rtdb.firebaseio.com/'

    // baseURL: process.env.REACT_APP_FIREBASE
});


//--------TMDB--------

const apiTmdb = axios.create({
    baseURL:'https://api.themoviedb.org/3',

    //baseURL: process.env.REACT_APP_TMDB_API

    params:{
        api_key:'91b8a203ba7436e309ba32657ae32bfd' 

        //api_key: process.env.REACT_APP_TMDB_APIKEY
    }
});

export { apiFirebase , apiTmdb }