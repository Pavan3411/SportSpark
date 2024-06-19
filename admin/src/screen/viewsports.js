import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Viewsports() {
    const [list,setlist] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:7654/api/getsports').then((Response)=> {
            setlist(Response.data);
        })
    } ,[]);

  return (
    <div>
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
                        <h4 class="card-title"> Sports Category Table</h4>
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered zero-configuration">
                                <thead>
                                    <tr>
                                        <th>Serial No.</th>
                                        <th>Category name</th>
                                        <th>Sports Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { list.map((val)=> {
                                        return(
                                    <>
                                     <tr>
                                        <td>{val.sc_id}</td>
                                        <td>{val.category_name}</td>
                                        <th>{val.sports_name}</th>
                                        <td>Edit | <span class='text-danger'>Delete</span></td>
                                    </tr>
                                    </>)})}
                                </tbody>
                                <tfoot>
                                <tr>
                                        <th>Serial No.</th>
                                        <th>Category name</th>
                                        <th>Sports Name</th>
                                        <th>Action</th>
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

</div>
  )
}

export default Viewsports;