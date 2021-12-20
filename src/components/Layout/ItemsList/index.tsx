import { FC } from "react";
import { Item } from "../../../types";
import { StarRating } from "../../StarRaiting";
import { Pagination } from "../../Common/Pagination";


import './styles.scss';


type Props={
    items:Item[], 
}

const ItemsList :FC<Props> = ({items}) =>{

    

    return(
        <div className="container">
            <div className="row">
                    {items?.map((item) => {
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
                <Pagination/>
            </div> 
        </div>  
    )
}   

export {ItemsList}