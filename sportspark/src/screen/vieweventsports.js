import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';
import "./vieweventsports.css";
import {Link} from "react-router-dom";

function Vieweventsports({applystyles}) {
    const location = useLocation();
    const id = location.state.catid;
   
    const [list, setlist]=useState([])
    
    
useEffect(()=>{

    axios.get("http://localhost:7654/api/sports",{params:{id:id}}).then((Response)=>{
        setlist(Response.data)
    },[])
})
const viewmatchbutton = () => {
   if (sessionStorage == null) {
    alert("Please login first");
    window.location = './login'
  }
   else {
    window.location = './viewmatch'
  }

   
}
  

  return (
    <div className='main-container-view'>
    
{applystyles && <link rel='stylesheet' type='css' href='./vieweventsports.css'/>}
    
         
    <div class="container-view">
    {list.map((val)=>{
        return(
          <>
  <div class="card" style={{width: "18rem;"}}>
  <img class="" src={"http://localhost:7654/public/"+val.image1} alt="Card image cap"/>
  <div class="card-body">
  <span class="tag tag-blue">{val.category_name}</span>
  <span class="tag tag-brown">{val.sports_name}</span>
      <h4>{val.event_name}</h4>
    <p class="card-text">{val.description}</p>
    <h5>{val.type}</h5>
          <small>{val.event_startdate}</small><br/>
          <small>{val.event_enddate}</small><br/>
          <Link to='/sportscard' class="tag tag-view">View</Link>
  </div>
</div>


  </>
        )
      })}
      
</div>
<div>
  <Link to='/localmatch' className='add-button'>Add Local Matches</Link>


  { sessionStorage.getItem('user_login') == null ?

<>
<Link to='/login' className='view-button'>View Local Matches</Link>

</>
:
<>
<Link to='/viewmatch' className='view-button'>View Local Matches</Link>
</>
  }
  
</div>
 

</div>

  )
}

export default Vieweventsports;