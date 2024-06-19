import React from 'react';
import "./localmatch.css";
import axios from 'axios';
import { useState,useEffect } from 'react';

function Localmatch()  {
  let user= JSON.parse(sessionStorage.getItem('user_login'))
  let user_id = user.user_id

  const [postimg, pimg] = useState('');

  const addmatch = () => {
    var categoryevent = document.getElementById("categoryevent").value;
    alert(categoryevent);
    var sportsevent = document.getElementById("sportsevent").value;
    alert(sportsevent);
    var eventname = document.getElementById("eventname").value;
    alert(eventname);
    var eventlocation = document.getElementById("eventlocation").value;
    alert(eventlocation);
    var city = document.getElementById("city").value;
    alert(city);
    var description = document.getElementById("description").value;
    alert(description);
    var startdate = document.getElementById("startdate").value;
    alert(startdate);
    var enddate = document.getElementById("enddate").value;
    alert(enddate);
    var matchtype = document.getElementById("matchtype").value;
    alert(matchtype);


    let formdata = new FormData();

    formdata.append("categoryevent",categoryevent);
    formdata.append("sportsevent",sportsevent);
    formdata.append("eventname",eventname);
    formdata.append("eventlocation", eventlocation);
    formdata.append("city",city);
    formdata.append("description",description);
    formdata.append("startdate",startdate);
    formdata.append("enddate",enddate);
    formdata.append("matchtype", matchtype);
    formdata.append('user_id',user_id)
    formdata.append("image", postimg);
    
     axios.post('http://localhost:7654/api/addmatch',formdata,{headers:{"Content-Type":"multipart/form-data"}}).then((Response) => {
         
    if(Response.data.msg){
     window.location="/localmatch"
     alert(Response.data.msg)
    }
    else{
     window.location="/localmatch";
     alert("data inserted sucessfully");


    }
        
       
     })
 }

    const [list,setlist] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:7654/api/getcategoryname').then((Response)=> {
            setlist(Response.data);
        })
    } ,[]);

    const [list1,setlist1] = useState([]);
    const getsoprtcat=()=>{

      var categoryevent = document.getElementById("categoryevent").value;
    //  alert(categoryevent);
      axios.post('http://localhost:7654/api/getsportsnamebycat',{catid:categoryevent}).then((Response)=> {
          setlist1(Response.data);
      },[]);
  }
  
  return (
    <div className='local-container'>
      <form onSubmit={addmatch}>
    <div className='local-details'>
    <div className='mb-2'>
    <label htmlFor='categoryevent'>CategoryName</label>
    <select class="form-control" id="categoryevent" name="categoryevent" onChange={()=>getsoprtcat()} required >
                                            <option value="0" id='categoryselect'
                                            name='categoryselect' >Please select</option>
                                            { list.map((val)=> {
                                        return(
                                    <>
                                           <option value={val.category_id} >
                                                {val.category_name} 
                                                </option>
                                            </>)})}
                                           
                                        </select>
    </div>
    <div className='mb-2'>
    <label htmlFor='sportsevent'>SportsName</label>
    <select class="form-control" id="sportsevent" name="sportsevent" required>
                                            <option value="">Please select</option>
                                            { list1.map((val)=> {
                                        return(
                                    <>
                                            <option value={val.sc_id} >
                                                {val.sports_name} 
                                                </option>
                                            </>)})}
                                        </select>
    </div>
    <div className='mb-2'>
    <label htmlFor='eventname'>EventName</label>
    <input type='text' placeholder='Enter Event Name' className='form-control' id="eventname" required />
    </div>
    <div className='mb-2'>
    <label htmlFor='eventlocation'>Location</label>
    <input type='text' placeholder='Enter Location' className='form-control' id="eventlocation" required />
    </div>
    <div className='mb-2'>
    <label htmlFor='city'>City</label>
    <select class="form-control" id="city" name="city">
                                            <option value="">Please select</option>
                                            <option value="Ahmedabad">Ahmedabad</option>
                                            <option value="Rajkot">Rajkot</option>
                                            <option value="Surat">Surat</option>
                                            <option value="Vapi">Vapi</option>
                                            <option value="Vadodara">Vadodara</option>
                                        </select>
    </div>
    <div className='mb-2'>
    <label htmlFor='description'>Description</label>
    <input type='text' placeholder='Enter Description' className='form-control' id="description" required />
    </div>
    <div className='mb-2'>
    <label htmlFor='startdate'>Start Date</label>
    <input type='date' placeholder='Mention Start date of the event' className='form-control' id="startdate" required />
    </div>
    <div className='mb-2'>
    <label htmlFor='enddate'>End Date</label>
    <input type='date' placeholder='Mention End date of the event' className='form-control' id="enddate" required />
    </div>
    <div className='mb-2'>
    <label htmlFor='matchtype'>Type</label>
    <select class="form-control" id="matchtype" name="matchtype">
                                            <option value="">Please select</option>
                                            <option value="National">National</option>
                                            <option value="Local">Local</option>
                                        </select>
    </div>
    <div className='mb-2'>
    <label htmlFor='image'>Image</label>
    <input type="file" name="image" placeholder="Add image file" onChange={(e)=>  pimg(e.target.files[0])

}/>
    </div>

    <div class="local_button">
                                        <button type="submit" class="btn btn-local">Add Match</button>
                                    </div>
    </div>
    </form>
    <div className='image-fm' >
    <img  className="image-form"src="images/cricket.jpg"></img>
    </div>
    </div>
  )
}

export default Localmatch;