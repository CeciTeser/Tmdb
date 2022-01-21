import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StarRating } from "../..";
import { processItemById } from "../../../redux/actions/itemById";

import { Item } from "../../../types";



// import './styles.scss';


type Props={
    items:Item[],
}

type ItembyIdStore={
   itemById:{
        data: Item,
    }
};



const CardDetail :FC<Props> = ({items}) =>{

    const dispatch = useDispatch()

    const [itemById, setItemById]= useState<string>('')

    const  [itemId]= useState< string >(
        localStorage.getItem("itemid")!
    );

    const {data} = useSelector((state:ItembyIdStore)=> state.itemById)


    console.log('Redux',data)
    
    useEffect (()=>{

        dispatch(processItemById(itemId))
        
    },[dispatch])
    
    console.log('itemIdSelected',itemId )

    return(

        <div className="container">
            
            <div className="card mb-5"> 
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.original_title}</p>
                            <StarRating stars={data.vote_average} />
                            <p className="card-text">{data.overview}</p>
                            <p className="card-text"> <strong>Release date:</strong> {data.release_date}</p>
                            <p className="card-text"> <strong>Original language:</strong> {data.original_language}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src ={`http://image.tmdb.org/t/p/w500${data.poster_path}`} className="img-fluid rounded-start" alt="PosterPath"/>
                    </div>
                </div>
            </div>
            <h2>ALSO...</h2>
            <div className="row" >
                    {items?.map((item) => {
                        return (
                            <div className="col-md-3 mb-5">
                                <div className="card each-card" key={item.id}>
                                    <a href={`/detail/itemId:${item.id}`} className="stretched-link"
                                    onClick={() => setItemById (item.idDB)}
                                    ></a>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <img src ={ `http://image.tmdb.org/t/p/w500${item.poster_path}`}  className="img-fluid" alt={item.title}></img>
                                        <h5 className="card-title mt-3">{item.title}</h5>
                                        <div className="mt-3">{item.vote_average}</div>
                                        <StarRating stars={item.vote_average} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div> 
        </div>  

    )
};

export {CardDetail}