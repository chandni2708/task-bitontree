import { React, useState } from "react";
import TextField from "@mui/material/TextField";


function Search(props) {

    const [query, setQuery] = useState("");

    const container = {
        padding: "3px",
         display: "flex",
         width : "30%",
           justifyContent: "flex-start",
        margin:"-50px",
    }

    const main = {
            display: "flex",
            width: "100%",
            alignItems: "flex-end",
            flexDirection: "column",
            rowGap: "20px",
    }
  return (
   <div style={main}>
      <div  style={container}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
    </div>
    </div>
  );
}

export default Search;