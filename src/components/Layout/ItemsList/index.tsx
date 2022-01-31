import { FC } from "react";
import { useHistory } from "react-router-dom";
import { useAuth, useItems } from "../../../hooks";
import { Item, Operation } from "../../../types";
import { StarRating } from "../../StarRaiting";
import { ButtonCard } from "../../Common";


import './styles.scss';


type Props={
    items:Item[], 
}

const ItemsList :FC<Props> = ({items}) =>{


    const { itemsListFB, addItems, deleteItems, watchedItems, notWatchedItems} = useItems()

    const {currentUser} = useAuth()

    const {push} = useHistory()

    const checkIfItemsExistsIntoDB = (itemId: number) => !!itemsListFB.items?.find(element => element.id === itemId)

    const checkIfItemWatched = (itemId: number) =>  !!currentUser.watched?.includes(itemId)

    const handleItemClick = (op: Operation, item: Item) => {
        switch(op) {
            case 'add' : addItems(item); break;
            case 'delete': deleteItems(item); break;
            case 'watched' : notWatchedItems(currentUser, item); break;
            case 'unwatched' : watchedItems(currentUser, item); break;
            default: return null;
        }
    }


    return(
        <div className="container">
            <div className="row" >
                    {items && items?.map((item) => {                       

                        const imageBroken = (!item.poster_path)? "https://i.stack.imgur.com/6M513.png" : `http://image.tmdb.org/t/p/w500${item.poster_path}`

                        return (
                            <div className="col-md-3 mb-5">
                                <div className="card each-card" key={item.id} onClick={() => push(`/detail/${item.idDB}`)}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <img src ={imageBroken}  className="img-fluid" alt={item.title}></img>
                                        <h5 className="card-title mt-3">{item.title}</h5>
                                        <div className="mt-3">{item.vote_average}</div>
                                        <StarRating stars={item.vote_average} />
                                    </div>
                                </div>
                                <ButtonCard 
                                    itemExists={checkIfItemsExistsIntoDB(item.id)} 
                                    itemWatched={checkIfItemWatched(item.id)}
                                    handleClick={(op) => handleItemClick(op, item)} 
                                    isAdmin={currentUser.role === 'admin'}
                                />
                            </div>
                        );
                    })}
            </div> 
        </div>  
    )
}   

export {ItemsList}