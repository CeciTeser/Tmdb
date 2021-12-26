import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsList, processDeleteItems, startItemsList } from "../../redux/actions/AddDeleteItems";
import { processItems } from "../../redux/actions/items";
import { Item, TotalResults, Store } from "../../types";

type ItemsStore={
    items:{
        data: TotalResults,
        error: {errorCode:string }|null,
    }
};


const useItems = () =>{

    const [page, setPage]= useState(1)
    const [search, setSearch]= useState<string>('')

    const dispatch = useDispatch()

    const {data} = useSelector((state:ItemsStore)=> state.items)

    const itemsListFB = useSelector((state:Store<Item>)=> state.itemsList)


    useEffect (()=>{
         dispatch(getItemsList())
        
    },[dispatch])


    useEffect (()=>{
        dispatch(processItems({ page, search }))
    
    },[dispatch, page, search])
    
    

    return { data, page, setPage, search, setSearch, itemsListFB}

}

export { useItems }