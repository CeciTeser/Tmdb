import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsList, processAddItems, processDeleteItems } from "../../redux/actions/AddDeleteItems";
import { patchUser } from "../../redux/actions/currentUser";
import { processItems } from "../../redux/actions/items";
import { Item, TotalResults, User } from "../../types";

type ItemsStore={
    items:{
        data: TotalResults,
        error: {errorCode:string }|null,
    }
};

type ItemsAddStore = {
    itemsList: {
        items: Item[];
        loading?: boolean;
        error?: string;
    };
};




const useItems = () =>{

    const [page, setPage]= useState(1)
    const [search, setSearch]= useState<string>('')

    const dispatch = useDispatch()

    const {data} = useSelector((state:ItemsStore)=> state.items)

    const itemsListFB = useSelector((state:ItemsAddStore)=> state.itemsList)



    const addItems = async (itemSelected: Item | undefined, item: Item) =>{
        
            if(!itemSelected){
                const response = (item.media_type)?item : {...item, media_type: 'movie'}
                await dispatch(processAddItems(response))
            }
    };


    const deleteItems = async (itemSelected: Item | undefined) =>{
            if(itemSelected){
            
                await dispatch(processDeleteItems(itemSelected.idDB))

            }
    };

    const watchedItems = async (userid:User, itemSelected: Item) =>{

        const watchedOrNot = userid.watched? userid.watched : []

        if(userid && !userid.watched?.includes(itemSelected.id)){
            
            watchedOrNot.push(itemSelected.id)

           const output = {...userid, watched: watchedOrNot}


            await dispatch(patchUser(userid?.idDB , output))
        }
    };


    const notWatchedItems = async (userid:User, itemSelected: Item) =>{

        const watchedOrNot = userid.watched? userid.watched : []

        if(userid.watched?.includes(itemSelected.id)){

            watchedOrNot.splice(watchedOrNot.indexOf(itemSelected.id), 1)

            const output = {...userid, watched: watchedOrNot}

            await dispatch(patchUser(userid?.idDB , output))
      }
    };
 


    useEffect (()=>{
         dispatch(getItemsList())
        
    },[dispatch])


    useEffect (()=>{
        dispatch(processItems({ page, search }))
    
    },[dispatch, page, search])
    
    

    return { data, page, setPage, search, setSearch, itemsListFB, addItems, deleteItems, watchedItems, notWatchedItems }

}

export { useItems }