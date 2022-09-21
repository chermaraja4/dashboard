import "./table.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import { useEffect,useState } from "react";
export default function Table(){

const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users', {
    
    })
    .then(function (response) {
      setData(response.data)
      console.log(response);
    })
  },[])
  console.log(data)

    return (
      <div className="table-wrapper">
        <div className="inner-wrapper"> 
        <table id="customers">
          <thead>
           <tr>
             <th>Company</th>
             <th>Contact</th>   
             <th>age</th>
           </tr>
         </thead>
       <tbody>

       {data.length>0 && data.map((list,index)=>{
        return (
      <tr>
      <td>{index+1}</td>
      <td>{list.username}</td>     
      <td><ProgressBar now={list.id*10}/></td>
    </tr> 
    )
  })}
   </tbody>
 </table>
 </div>
</div>

    )
}