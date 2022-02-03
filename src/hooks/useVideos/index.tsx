import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { processItemById } from "../../redux/actions/itemById";
import { processVideos } from "../../redux/actions/videos";

import { Item, Video } from "../../types";

type ItembyIdStore={
    itemById:{
         data: Item,
     }
 };
 
 type VideosStore = {
     video: {
         data: Video[];
         loading?: boolean;
         error?: string;
     };
 };

 const useVideos =()=>{
 
    const {data} = useSelector((state:ItembyIdStore)=> state.itemById)

    const videoList = useSelector((state:VideosStore)=> state.video)

    const {idItem} = useParams<{idItem:string}>()

    const dispatch = useDispatch()

    useEffect (()=>{

        dispatch(processItemById(idItem))
        
    },[dispatch, idItem])


    useEffect (()=>{

        dispatch(processVideos(data.id))
        
    },[dispatch, data.id])

    return {data , videoList ,  idItem }

}
export {useVideos}