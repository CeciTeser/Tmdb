import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processItems } from "../../../redux/actions/items";
import { Item } from "../../../types";
import { StarRating } from "../../StarRaiting";



import './styles.scss';

type ItemsStore={
    items:{
        data: Item[],
        // error: {errorCode:string }|null,
    }
}

const Admin:FC=()=>{

    const dispatch = useDispatch()
    

    const {data} = useSelector((state:ItemsStore)=> state.items)


    useEffect (()=>{
        dispatch(processItems())
    
    },[dispatch])


    return(
        <div className="container">
            <div className="row">
                    {data?.map((item) => {
                        return (
                            <div className="col-md-3 mb-5">
                                <div className="card each-card" >
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <img src ={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="img-fluid" alt={item.title}></img>
                                        <h5 className="card-title mt-3">{item.title}</h5>
                                        <div className="mt-3">{item.vote_average}</div>
                                        <StarRating stars={item.vote_average} />
                                        <a href=" "className="btn btn-primary mt-3">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div> 
        </div>
    )
}

export {Admin}