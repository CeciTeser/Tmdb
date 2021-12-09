import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processMovies } from "../../../redux/actions/movies";
import { Item } from "../../../types";


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
            <div>

            <table className="table">
                <thead>
                    <tr>
                    <th>MOVIE ID</th>
                    <th>MOVIE TITLE</th>
                    <th>MOVIE POSTER</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((movie) => {
                    return (
                <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.poster_path}</td>
                    {/* <td><button onClick={() => dispatch (deleteUsers(movie.id))}> DELETE </button></td> */}
            </tr>
                );
                })}
                </tbody>
            </table> 
        </div>
    )
}

export {Movies}