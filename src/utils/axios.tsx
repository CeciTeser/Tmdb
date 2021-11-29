import axios from 'axios';

//--------FIREBASE--------

const apiFirebase = axios.create({
    baseURL:'https://tmdb-9d289-default-rtdb.firebaseio.com/'
});


//--------TMDB--------

const apiTmdb = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params:{
        api_key:'91b8a203ba7436e309ba32657ae32bfd' 
    }
});

export { apiFirebase , apiTmdb }