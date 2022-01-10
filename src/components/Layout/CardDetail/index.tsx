import { FC } from "react";

import { Item } from "../../../types";



// import './styles.scss';


type Props={
    items:Item[], 
}

const CardDetail :FC<Props> = ({items}) =>{

    return(
        <div className="container">
            <div className="row" >
                    {items?.map((item) => {

                        return (
                            <div className="col-md-3 mb-5">
                                <div className="card each-card" key={item.id}>
                                    <a href={`/detail/itemId:${item.id}`} className="stretched-link"></a>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <img src ={ `http://image.tmdb.org/t/p/w500${item.poster_path}`}  className="img-fluid" alt={item.title}></img>
                                        <h5 className="card-title mt-3">{item.title}</h5>
                                        <div className="mt-3">{item.vote_average}</div>
                                       
                                    </div>
                                </div>
                               
                            </div>
                        );
                    })}
            </div> 
        </div>  
    )
}   

export {CardDetail}