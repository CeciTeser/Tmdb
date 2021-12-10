import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processMovies } from "../../../redux/actions/movies";
import { Item } from "../../../types";

import './styles.scss';

type MoviesStore={
    movies:{
        data: Item[],
    }
}

const Movies:FC=()=>{

    const dispatch = useDispatch()
    

    const {data} = useSelector((state:MoviesStore)=> state.movies)


    useEffect (()=>{
        dispatch(processMovies())
    
    },[dispatch])


    return(
        <div className="container">
            <div className="row">
                    {data?.map((movie) => {
                        return (
                            <div className="col-md-3 mb-5 each-card">
                                <div className="card" >
                                    <img src ={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.title}></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <a href=" "className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div> 
        </div>
    )
}

export {Movies}