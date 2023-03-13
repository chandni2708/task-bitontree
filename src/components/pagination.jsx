import React from "react";
import { returnPaginationRange } from "../utils/appUtils";

function Pagination(props){
    let array = returnPaginationRange(props.totalPage,props.page,props.limit,props.siblings);
return(
  <ul class="pagination pagination-md justify-content-end">
    <li class="page-item">
    <span class="page-link" onClick={() => props.onPageChange("Previous")}>Previous</span>
    </li>
    {array.map(value =>{
        if(value === props.page){
            return(
            <li key={value} class="page-item active">
            <span class="page-link" onClick={() => props.onPageChange(value)}>{value}</span></li>
     ) 
     }
        else{
            return(
            <li key={value} class="page-item">
            <span class="page-link" onClick={() => props.onPageChange(value)}>{value}</span>
            </li>
       )
        }
      })}
    <li class="page-item"><span class="page-link" onClick={() => props.onPageChange("Next")}>Next</span>
    </li>
  </ul>
)
}

export default Pagination;