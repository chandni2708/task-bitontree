import React from "react";


function SelectLimit(props){

    const container = {
        padding: "1px",
         display: "flex",
         fontSize: "20px",
           justifyContent: "flex-start",
        margin:"1px",

    }

    const myStyles= {
        fontSize: "24px",
    }
      

    return(
        <div style={container}>
        <p style={myStyles}> Show </p>
     <select onChange={(e) => props.onLimitChange(e.target.value)} className="select">
        <option value="10">10</option>
       <option value="50">50</option>
      <option value="100">100</option>
      <option value="300">300</option>
      <option value="300">500</option>
      <option value="1000">ALL</option>
      </select>
      <p style={myStyles}> Entries </p>
      </div>

    );

}

export default SelectLimit;