import { FC } from "react";
import { useDispatch } from "react-redux";
import { processItems } from "../../../redux/actions/items";
import { useItems } from "../../../hooks/useItems";
import ReactPaginate from 'react-paginate';



const Pagination :FC = () =>{

    const {setPage} = useItems()

    const dispatch = useDispatch()

    
    const handlePageClick= async (data:any)=>{

        let currentPage = data.selected + 1 

        const value = await dispatch(processItems(currentPage)) 

        setPage(Number(value))
    }


    return(
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                pageCount= {470}
                marginPagesDisplayed = {1}
                onPageChange = {handlePageClick}
                containerClassName= {'pagination pagination-sm justify-content-center'} 
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakLinkClassName= {'page-link'}
                activeClassName = {'active'}
            /> 
    )
}  

export { Pagination };