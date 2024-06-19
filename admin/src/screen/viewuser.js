import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Viewuser()  {

    const [list,setlist] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:7654/api/getcategoryevent').then((Response)=> {
            setlist(Response.data);
        })
    } ,[]);
  return (
    <>
    <div>

        <div class="content-body">

            <div class="row page-titles mx-0">
                <div class="col p-md-0">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                        <li class="breadcrumb-item active"><a href="/dashboard">Home</a></li>
                    </ol>
                </div>
            </div>
            

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Event Table</h4>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered zero-configuration">
                                        <thead>
                                        <tr>
                                            <th>Category</th>
                                                <th>Sports</th>
                                            <th>Event_name</th>
                                                <th>Event_StartDate</th>
                                                <th>Event_EndDate</th>
                                                <th>Description</th>
                                                <th>Location</th>
                                                <th>Type</th>
												<th>Amount</th>
                                                <th>Image1</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                     { list.map((val)=> {
                                        return(
                                    <>
                                            <tr>
                                                <td>{val.category_name}</td>
                                                <td>{val.sports_name}</td>
                                                <td>{val.event_name}</td>
                                                <td>{val.event_startdate}</td>
                                                <td>{val.event_enddate}</td>
                                                <td>{val.description}</td>
                                                <td>{val.location}</td>
                                                <td>{val.type}</td>
												<td>{val.amount}</td>
                                                <td><img src={'http://localhost:7654/public/'+val.image1} style={{height:"100px", width:"100px"}}/> </td>
                                            </tr>
                                            </>)})}
                                            
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                            <th>Category</th>
                                                <th>Sports</th>
                                            <th>Event_name</th>
                                                <th>Event_StartDate</th>
                                                <th>Event_EndDate</th>
                                                <th>Description</th>
                                                <th>Location</th>
                                                <th>Type</th>
												<th>Amount</th>
                                                <th>Image1</th>
                                            </tr>
                                        </tfoot>
                                    </table>
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

export default Viewuser;