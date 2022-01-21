import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { Item } from "../../../types";
import { StarRating } from "../../StarRaiting";
import { ButtonCard } from "../../Common";


import './styles.scss';


type Props={
    items:Item[], 
}


const ItemsList :FC<Props> = ({items}) =>{

    const {push} = useHistory()

    const [itemById, setItemById]= useState<string>('')

    if(itemById)  {
        localStorage.setItem("itemid", itemById);
        push(`/detail/itemId:${itemById}`)
    };


    return(
        <div className="container">
            <div className="row" >
                    {items?.map((item) => {                       

                        const imageBroken = (!item.poster_path)? "https://i.stack.imgur.com/6M513.png" : `http://image.tmdb.org/t/p/w500${item.poster_path}`

                        return (
                            <div className="col-md-3 mb-5">
                                <div className="card each-card" key={item.id}>
                                    <a href={`/detail/itemId:${item.id}`} className="stretched-link"
                                    onClick={() => setItemById (item.idDB)}
                                    >
                                    </a>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <img src ={imageBroken}  className="img-fluid" alt={item.title}></img>
                                        <h5 className="card-title mt-3">{item.title}</h5>
                                        <div className="mt-3">{item.vote_average}</div>
                                        <StarRating stars={item.vote_average} />
                                    </div>
                                </div>
                                <ButtonCard item={item}/>
                            </div>
                        );
                    })}
            </div> 
        </div>  
    )
}   

export {ItemsList}