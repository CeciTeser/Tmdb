import { FC } from "react";
import ReactPaginate from 'react-paginate';

import { useItems } from "../../../hooks/useItems";



const Pagination :FC = () =>{

    const {data , setPage} = useItems()
    
    const handlePageClick= (data:any)=>{

        let currentPage = data.selected + 1 

        setPage(currentPage)
       
    }

    return(
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                pageCount={data.total_pages}
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