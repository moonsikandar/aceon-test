import React, { useContext, useEffect,useState } from "react";
import { Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { callContext } from "../Store/store";
import classes from "./call.module.css";
const CallList = ({ data }) => {

    const [query,setQuery]=useState("")
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage =6;
   const ctx = useContext(callContext)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;


    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    
  };
  const queryHandler = (e)=>{
    setQuery (e.target.value)
  }

  let filterItems = [...currentItems];
 
    if (query.length > 0) {
      filterItems = [...data];
      
      filterItems = filterItems.filter(
        (e) =>
          e.from.includes(query) ||
          e.to.includes(query)
      );
    }
    
  
 
  return (
    <div className={classes.call_list}>
      <input type="search" placeholder="Search by using number" onChange={queryHandler}/>

      <div className={classes.table_wrap}>
        <table className={classes.table}>
          <thead>
          <tr>
            <th>CALL TYPE</th>
            <th>DIRECTION</th>
            <th>DURATION</th>
            <th>FROM</th>
            <th>TO</th>
            <th>VIA</th>
            <th>CREATED AT</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
          </thead>
          <tbody>
          {filterItems.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.call_type}</td>
                <td><Link>{e.direction}</Link></td>
                <td>{e.duration} sec</td>
                <td>{e.from}</td>
                <td>{e.to}</td>
                <td>{e.via}</td>
                <td>{e.created_at}</td>
                <td ><span className={e.is_archived?classes.arc:classes.unarc}>{e.is_archived?"Archived":"unArchived"}</span></td>
                <td>
                  <Link to="/detailofCall" ><Button onClick={()=>ctx.setMyData(e)}>Add Notes</Button></Link>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>

        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
        />
        <p> { `1 - ${pageCount} of ${data.length} Results`}</p>
      </div>
      
    </div>
  );
};

export default CallList;
