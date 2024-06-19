import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
function Addsports()  {
    const adminsports = () => {
        var sportscategory = document.getElementById('sportscategory').value;
        // alert(sportscategory);
        var sportsname = document.getElementById('sportsname').value;
        // alert(sportsname);
        axios.post('http://localhost:7654/api/adminsports',{sportscategory:sportscategory,sportsname:sportsname}).then((Response) => {
            alert(Response.data.message);
        })
    }
    const [list,setlist] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:7654/api/getcategoryname').then((Response)=> {
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
              <h4 class="card-title">Sports Name</h4>
                  <div class="form-validation">
                      <form class="form-valide" onSubmit={adminsports}>
                      <div class="form-group row">
                                    <label class="col-lg-4 col-form-label" for="sportscategory">Sport Category<span class="text-danger">*</span>
                                    </label>
                                    <div class="col-lg-6">
                                   
                                        <select class="form-control" id="sportscategory" name="sportscategory">
                                            <option value="">--Please select--</option>

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
                              <label class="col-lg-4 col-form-label" for="sportsname">Sports Name<span class="text-danger">*</span>
                              </label>
                              <div class="col-lg-6">
                                  <input type="text" class="form-control" id="sportsname" name="sportsname" placeholder="Add Sports Name.."/>
                              </div>
                          </div>
                          <div class="form-group row">
                              <div class="col-lg-8 ml-auto">
                                  <button type="submit" class="btn btn-primary">Add Sports</button>
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

export default Addsports;