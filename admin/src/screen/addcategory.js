import React from 'react';
import axios from "axios";

function Addcategory()  {
    const admincategory = () => {
        var categorytype = document.getElementById("categorytype").value;
        alert(categorytype);
        axios.post('http://localhost:7654/api/admincategory',{categorytype:categorytype}).then((Response)=> {
            alert(Response.data.message);
        })
    }
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
              <h4 class="card-title">Category</h4>
                  <div class="form-validation">
                      <form class="form-valide" onSubmit={admincategory}>
                          <div class="form-group row">
                              <label class="col-lg-4 col-form-label" for="categorytype">Category Type<span class="text-danger">*</span>
                              </label>
                              <div class="col-lg-6">
                                  <input type="text" class="form-control" id="categorytype" name="categorytype" placeholder="Add Category Type.."/>
                              </div>
                          </div>
                          
                          <div class="form-group row">
                              <div class="col-lg-8 ml-auto">
                                  <button type="submit" class="btn btn-primary">Add Category</button>
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

export default Addcategory;