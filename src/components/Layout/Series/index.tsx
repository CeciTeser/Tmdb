import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processItems } from "../../../redux/actions/items";
import { Item } from "../../../types";

// import './styles.scss';

type SeriesStore={
    series:{
        data: Item[],
    }
}

const Series:FC=()=>{

    const dispatch = useDispatch()
    

    const {data} = useSelector((state:SeriesStore)=> state.series)


    useEffect (()=>{
        dispatch(processItems())
    
    },[dispatch])


    return(
        <div className="container">
            <div className="row">
                    {data?.map((serie) => {
                        return (
                            <div className="col-md-3 mb-5 each-card">
                                <div className="card" >
                                    <img src ={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} className="card-img-top" alt={serie.title}></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{serie.title}</h5>
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

export {Series}