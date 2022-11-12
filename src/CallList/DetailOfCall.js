import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext,useState } from 'react'
import classes from "./detailofcall.module.css"
import { callContext } from '../Store/store'
import { Link } from 'react-router-dom';



const DetailOfCall = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const ctx = useContext(callContext)

  return (
    
        <div className={classes.call_detail}>
           <div>
           <h3>Add Notes</h3>
            <Link>Call ID {ctx.myData.id}</Link>
           </div>
         
           <table>
            <tbody>
            <tr>
                <td>Call Type</td>
                <td><Link>Voice Mail</Link></td>
            </tr>
            <tr>
                <td>Durantion</td>
                <td>{ctx.myData.duration}</td>
            </tr>
            <tr>
                <td>From</td>
                <td>{ctx.myData.from}</td>
            </tr>
            <tr>
                <td>To</td>
                <td> {ctx.myData.to}</td>
            </tr>
            <tr>
                <td>Via</td>
                <td> {ctx.myData.via}</td>
            </tr>
            

            </tbody>
            
           </table>
           <form>
            <label>
                Note:
            </label> <br></br>
            <textarea placeholder='Add Notes...'>

            </textarea>
            <br></br>
            <Button>Save</Button>
           </form>

        </div>
        
    

  )
}

export default DetailOfCall