import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Adduser()  {

    const [postimg, pimg] = useState('');


    function addevent(e){
        e.preventDefault()
        var categoryevent = document.getElementById("categoryevent").value;
        //alert(categoryevent);
        var sportsevent = document.getElementById("sportsevent").value;
       //alert(sportsevent);
        var eventname = document.getElementById("eventname").value;
       //alert(eventname);
        var eventlocation = document.getElementById("eventlocation").value;
       //alert(eventlocation);
        var startdate = document.getElementById("startdate").value;
       //alert(startdate);
        var enddate = document.getElementById("enddate").value;
       //alert(enddate);
        var description = document.getElementById("description").value;
       //alert(description);
        var valtype = document.getElementById("valtype").value;
       //alert(valtype);
        var amount = document.getElementById("amount").value;

       //alert(amount);
       let formdata = new FormData();

       formdata.append("categoryevent",categoryevent);
       formdata.append("sportsevent",sportsevent);
       formdata.append("eventname",eventname);
       formdata.append("eventlocation", eventlocation);
       formdata.append("startdate",startdate);
       formdata.append("enddate",enddate);
       formdata.append("description",description);
       formdata.append("valtype",valtype);
       formdata.append("amount", amount);

       formdata.append("image", postimg);
       
       axios.post('http://localhost:7654/api/addevent', formdata, { headers: { "Content-Type": "multipart/form-data" } })
       .then((response) => {
           if (response.data.msg) {
               window.location = "/adduser";
               alert(response.data.msg);
           } else {
               window.location = "/viewuser";
               alert("Data inserted successfully");
           }
       })
       .catch((error) => {
           console.error("Error adding event:", error);
           // Handle error: Show an error message to the user or retry the request
       });
   
    }
    const [list,setlist] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:7654/api/getcategoryname').then((Response)=> {
            setlist(Response.data);
        })
    } ,[]);
    const [list1,setlist1] = useState([]);

    // useEffect(()=> {
    //     axios.get('http://localhost:7654/api/getsportsname').then((Response)=> {
    //         setlist1(Response.data);
    //     })
    // } ,[]);


    const getsoprtcat=()=>{

        var categoryevent = document.getElementById("categoryevent").value;
      //  alert(categoryevent);
        axios.post('http://localhost:7654/api/getsportsnamebycat',{catid:categoryevent}).then((Response)=> {
            setlist1(Response.data);
        },[]);

    }
    // const selectfield =() => {
    //     var categoryselect = document.getElementById("categoryselect").value;
    //     console.log("hello")
    //     if ( categoryselect === "Please select") {
    //         alert("Please select category first");
    //     }
    //     else{
    //         getsoprtcat();
    //     }

    // }

    
    
  return (
    <>
          <div>

<div class="content-body">

    <div class="row page-titles mx-0">
        <div class="col p-md-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
            </ol>
        </div>
    </div>


    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Events</h4>
                        <div class="form-validation">
                            <form class="form-valide">
                            <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="categoryevent">Category<span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
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
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="sportsevent">Type <span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
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
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="eventname">Event Name<span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
                                        <input type="text" class="form-control" id="eventname" name="eventname" placeholder="Enter a event name.."/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="eventlocation">Event Location<span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
                                        <input type="text" class="form-control" id="eventlocation" name="event location" placeholder="Add Event location.."/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="startdate">Start Date<span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
                                        <input type="date" class="form-control" id="startdate" name="startdate" placeholder="Mention Start date of the event"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="enddate">End Date<span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
                                        <input type="date" class="form-control" id="enddate" name="enddate" placeholder="Mention Start date of the event"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="description">Description<span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
                                        <textarea class="form-control" id="description" name="description" rows="5" placeholder="What would you like to add about event?"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="valtype">Type <span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
                                        <select class="form-control" id="valtype" name="valtype">
                                            <option value="">Please select</option>
                                            <option value="free">Free</option>
                                            <option value="premium">Premium</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="amount">Amount<span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
                                        <input type="text" class="form-control" id="amount" name="amount" placeholder="Rs."/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="image">Image <span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
                                        <input type="file" name="image" placeholder="Add image file" onChange={(e)=>  pimg(e.target.files[0])

                                        }/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-4 col-form-label"><a href="#">Terms &amp; Conditions</a>  <span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-8">
                                        <label class="css-control css-control-primary css-checkbox" for="val-terms">
                                            <input type="checkbox" class="css-control-input" id="val-terms" name="val-terms" value="1"/> <span class="css-control-indicator"></span> I agree to the terms</label>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-lg-8 ml-auto">
                                        <button type="button" class="btn btn-primary"onClick={addevent}>Add Event</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

</div>
    </>
  )
}

export default Adduser;