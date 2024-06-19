import React from 'react';
import axios from 'axios';

function Signup()  {


    function userreg(){

var fn=document.getElementById("fn").value;
// alert(fn);
var ln=document.getElementById("ln").value;
// alert(ln);
var email =document.getElementById("email").value;
// alert(email);
var password =document.getElementById("password").value;
// alert(password);
var mobile_no = document.getElementById("mobile_no").value;
// alert(mobile_no);
var gender = document.getElementById("gender").value;
// alert(gender);
var dob = document.getElementById("dob").value;
// alert(dob);
var country = document.getElementById("country").value;
// alert(country);
var cn = document.getElementById("cn").value;
// alert(cn);
axios.post('http://localhost:7654/api/userreg',{fn:fn,ln:ln,email:email,password:password,mobile_no:mobile_no,gender:gender,dob:dob,country:country,cn:cn}).then((Response)=> {
    alert(Response.data.message);
})

    }






  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary' >
        <div className='form-container p-5 rounded bg-white' id='signupcontainer'>
            <form onSubmit={userreg}>
                <h3 className='text-center' style={{ color: 'black' }}>Sign Up</h3>
                <div className='mb-2'>
                    <label htmlFor='fname'>First Name</label>
                    <input id="fn" type='text' placeholder='Enter First Name' className='form-control'  required></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' placeholder='Enter Last Name' className='form-control' id="ln" required></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control' id="email"></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password' className='form-control' id="password"></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor='mobile_no'>Mobile No.</label>
                    <input type='tel' placeholder='Enter Mobile No.' className='form-control' id="mobile_no"></input>
                </div><br/>
                <div className='mb-2'>
                    <label className='text-center' style={{ color: 'gray' }}>Gender</label>
                    <span>"    "</span>
                    <input type="radio" id="gender" name="gender" value="Male"></input>
                        <label   className='text-center' style={{ color: 'gray' }} for="gender"> Male</label>
                        <span>"     "</span>
                    <input type="radio" id="gender" name="gender" value="Female"></input>
                        <label   className='text-center' style={{ color: 'gray' }} for="gender"> Female</label>
                </div>
                <div>
                <label className='text-center' style={{ color: 'gray' }}  for="dob">Date of Birth: </label><span>"  "</span>
                <input  type="date" id="dob" style={{ color: 'gray' }} name="dob"/>
                </div>
                <div className='mb-2'>
                    <br/>
                    <label htmlFor='country'style={{ color: 'gray', marginRight: '10px' }}>Country</label>
                    <input id="country" type='text' placeholder='Enter Your Country' className='form-control' class='country'style={{ color: 'gray', width: '278px' }} required/>
                </div>

                <div className='mb-2'>
                    <br/>
                    <label htmlFor='cn'style={{ color: 'gray', marginRight: '42px' }}>City</label>
                    <input id="cn" type='text' placeholder='Enter Your City' className='form-control' class='cn'style={{ color: 'gray', width: '278px' }} required/>
                </div>
                <br/>
                
                <div className='d-grid mt-2'>
                <button className='btn btn-primary' type="submit">Sign up</button>
                <div>
                <p className='text-center' style={{ color: 'gray' }}>By continuing, you agree to the <a href='#'>Terms of Service</a></p>
                </div>
                </div>
                <p className='text-end mt-2'>
                  Already have an account?<a href='/login' className='ms-2'>Sign in</a>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Signup;