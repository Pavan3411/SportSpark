import React from 'react'
// import axios from 'axios';

function Register() {

    // function adminreg(){

    //     var name=document.getElementById("name").value;
    //     alert(name);
    //     var email =document.getElementById("email").value;
    //     alert(email);
    //     var password =document.getElementById("password").value;
    //     alert(password);
        
    //     axios.post('http://localhost:7654/api/adminreg',{name:name,email:email,password:password}).then((Response)=> {
    //         alert(Response.data.message);
    //     })
        
    //         }
  return (
    <>

    <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="card login-form mb-0">
                            <div class="card-body pt-5">
                                
                                    <a class="text-center" href="index.html"> <h4>Register</h4></a>
        
                                <form class="mt-5 mb-5 login-input">
                                    <div class="form-group">
                                        <input type="text" class="form-control"  placeholder="Name"  id='name'required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control"  placeholder="Email" id='email' required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password" id='password' required/>
                                    </div>
                                    <button class="btn login-form__btn submit w-100">Sign Up</button>
                                </form>
                                    <p class="mt-5 login-form__footer">Have account <a href="/login" class="text-primary">Sign In</a> now</p>
                                    
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

export default Register;