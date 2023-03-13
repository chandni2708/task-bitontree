import React , { useState } from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Collapse from 'react-bootstrap/Collapse';


function Table(props){

  const [open, setOpen] = useState(false);
  

    return(
       <table class="table">
       <thead>
             <tr>
    <th className="p-3">ID</th>
      <th className="p-3">Username</th>
      <th className="p-3">First_Name</th>
      <th className="p-3">Last_name</th>
      <th className="p-3">Email</th>
      <th className="p-3">Gender</th>
     </tr>
       </thead>
        <tbody>
         {props.users.map(user => ( 
            <tr key={user.id}>
                 <td>
                 <ControlPointIcon onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} />
            
        <Collapse in={open}>
        <div className="p-3" id="example-collapse-text">
                 <table class="table">
       <thead>
       <tr key={user.id}>
      <th className="p-3">Date OF Birth </th>
      <th className="p-3">Country</th>
      </tr>
       </thead>
       <tbody>
       <tr key={user.id}>
       <td>{user.dob}</td>
                 <td>{user.country}</td>
                 </tr>
       </tbody>
       </table>

         {/* ))} */}
        </div>
      </Collapse>
      {user.id}</td>
                 <td>{user.username}</td>
                 <td>{user.first_name}</td>
                 <td>{user.last_name}</td>
                 <td>{user.email}</td>
                 <td>{user.gender}</td>

    </tr>
         ))}

       </tbody>
       </table>
    )
}

export default Table;