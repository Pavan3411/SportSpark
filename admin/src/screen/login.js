import React from 'react'
import axios from 'axios';

function Login() {

    const adminlogin = () => {
        var email = document.getElementById("email").value;
        
        var password = document.getElementById("password").value;
        
        axios.post('http://localhost:7654/api/adminlogin',
        {email:email,password:password}).then((Response)=> {
            if(Response.data.message){
                window.location='/dashboard';
                alert("wrong email/password");
            }
            else {
                let store = {a_email:Response.data[0].
                a_email,
                a_id:Response.data[0].a_id,
                }
                sessionStorage.setItem("ad_login",JSON.stringify(store));
                window.location="/dashboard";
                alert("Login Success")
            }
        })
    }
  return (
    <div>
        <br/><br/><br/><br/><br/>
    
    <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="card login-form mb-0">
                            <div class="card-body pt-5">
                                <a class="text-center" href="index.html"> <h4>SportSpark</h4><br/><h4>Login</h4></a>
        
                                <form class="mt-5 mb-5 login-input" 
                            onSubmit={()=> adminlogin()}>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Email"
                                        id='email'/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password"
                                        id='password'/>
                                    </div>
                                   <button class="btn login-form__btn submit w-100"><a href="dashboard.html"> Sign In</a></button>
                                </form>
                                {/* <p class="mt-5 login-form__footer">Dont have account? <a href="/register" class="text-primary">Sign Up</a> now</p> */}
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

export default Login