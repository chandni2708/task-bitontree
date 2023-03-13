import { useState } from 'react';
import { getUsers, getLength } from './api/users';
import './App.css';
import Table from './components/table';
import Pagination from './components/pagination';
import SelectLimit from './components/selectLimit';
import Search from './components/search';

function App() {
  const[page,setPage] = useState(1);
  const[limit,setLimit] = useState(10);

  let totalPage = Math.ceil(getLength() / limit);
  let pageNo;
  if(page <= totalPage){
    pageNo = page;
  }
  else{
    setPage(totalPage);
    pageNo = page;
  }

   function handlePageChange(value){
            if(value === "Previous" || value === "..."){
              setPage(page-1);
            }
            else if(value === "Next" || value === "..."){
            setPage(page+1);
            }
            else{
              setPage(value);
            }
          }

  return (
    <div className="container">
    <SelectLimit onLimitChange={setLimit} />
    <Search users={getUsers(page,limit)}/>
    <Table  users={getUsers(page,limit)} />
    <div className='pagination-container'>
    <Pagination 
    totalPage={totalPage}  page={pageNo}  limit={limit}  siblings={1} onPageChange={handlePageChange}/>
     </div>
    </div>
   
  );
}

export default App;
