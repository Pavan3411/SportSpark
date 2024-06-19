import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {

    const userreg = () => {
        
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        axios.post('http://localhost:7654/api/userlogin', { email: email, password: password }).then((Response) => {
            if (Response.data.message) {
                window.location = "/login";
                alert("Wrong email/password");
            } else {
                console.log(Response.data)
                let store = {
                    email: Response.data.result[0].email_id,
                    user_id: Response.data.result[0].user_id,
                    user_fname: Response.data.result[0].user_fname,
                    cn: Response.data.result[0].city,
                }
                sessionStorage.setItem("user_login", JSON.stringify(store));

                sessionStorage.setItem('authToken',Response.data.auth);
                
                window.location = "/";
                alert("Login Success");
            }
        })
    };

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operation, setOperation] = useState('+'); 
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [captchaMessage, setCaptchaMessage] = useState('');

    useEffect(() => {
        generateNumbers();
    }, []);

    const generateNumbers = () => {
    
        const number1 = Math.floor(Math.random() * 10);
        const number2 = Math.floor(Math.random() * 10);
        const operations = ['+', '-', '*'];
        const randomOperation = operations[Math.floor(Math.random() * operations.length)];

        setNum1(number1);
        setNum2(number2);
        setOperation(randomOperation);
        setAnswer('');
        setIsCorrect(false);
        setCaptchaMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(answer)
        let result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            default:
                result = num1 + num2; 
        }

        if (parseInt(answer) === result) {
            setIsCorrect(true);
            setCaptchaMessage('Captcha is correct!');

            userreg();
         
        } else {
            setIsCorrect(false);
            setCaptchaMessage('Captcha is incorrect!');
            
        }
    };

    const submitdata=(e)=> {
        e.preventDefault();
        var email = document.getElementById("email").value;
        console.log(email);
alert(email)
        axios.post("http://localhost:7654/api/forgot", {email: email}).then((response)=> {
            if (response.data.message){
                window.location="/Login";
                alert(response.data.message);
            }
            else {
                window.location="/";
                alert("Password sent to registered Email");
            }
        })
    }

    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form-container p-5 rounded bg-white'>
                <form onSubmit={(e) => {e.preventDefault();
                    userreg()}}>
                    <h3 className='text-center' style={{ color: 'black' }}>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control' id="email" required />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control' id="password" required />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='captcha'>Captcha</label>
                        <p style={{ margin: '0 4px', paddingBottom: '5px' }}>{num1} {operation} {num2} = ? </p>
                        <input type='text' placeholder='Enter Captcha' className='form-control' id="captcha" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
                        <button  onClick={handleSubmit}type='button' style={{ backgroundColor: 'blue', margin: '10px 0' }}>Submit</button>
                    </div>
                    <p style={{ color: isCorrect ? 'green' : 'red' }}>{captchaMessage}</p>
                    <div>
                        <input type='checkbox' className='custom-control custom-checkbox' id='check'></input>
                        <label htmlFor='check' className='custom-input-label ms-2' style={{ color: 'black', marginTop: '70px'}}>
                            Remember me
                        </label>
                    </div>
                    <div className='d-grid' >
                        <button className='btn.login-form_' type="submit" style={{ backgroundColor: 'blue' }}>Sign in</button>
                    </div>
                    <p className='text-end mt-2'>
                        <a href='ms-2 me-2' onClick={submitdata}>Forgot Password?</a>
                        <a href='/signup' className='ms-2'>Sign up</a>
                    </p>
                </form>
            </div>
            {/* <p>Designed by SportSpark</p> */}
        </div>
    )
}

export default Login;
