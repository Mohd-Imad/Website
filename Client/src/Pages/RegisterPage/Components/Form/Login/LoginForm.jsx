import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './LoginForm.css'

const LoginForm = () => {
    
    const [details, setDetails] = useState({
        email : "",
        password : ""
    })
    const [emailErr, setEmailErr] = useState(null)
    const [passwordErr, setPasswordErr] = useState(null)
    const [valid, setValid] = useState(false)

    useEffect(()=>{
        if(valid===true){
            validateLoginForm()
        }
    },[details])

    const inputHandler = (event)=>{
        setDetails({...details,[event.target.name] : event.target.value})
    }

    const validateLoginForm = ()=>{
        let email = details.email
        let password = details.password

        //Email Validation
        if(email === ""){
            setEmailErr("Please enter Email ID")
        }
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email)) {
            setEmailErr("Enter valid Email ID")
        }
        else {
            setEmailErr("")
        }

         //Password validation
         if (password === "") {
            setPasswordErr("Please enter your Password")
        }
        else if (password.length < 6 || password.length > 15) {
            setPasswordErr("Password must be of min 6 and max 15 characters")
        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            setPasswordErr("Password must have atleast 1 uppercase letter")
        }
        else if (!/(?=.*?[a-z])/.test(password)) {
            setPasswordErr("Password must have atleast 1 lowercase letter")
        }
        else if (!/(?=.*?[0-9])/.test(password)) {
            setPasswordErr("Password must have atleast 1 number ")
        }
        else {
            setPasswordErr("")
        }

        if(emailErr === "" && passwordErr === ""){
            return true
        }
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        setValid(true)
        let login = validateLoginForm()
        if(login === true){
            alert("Login Successful...!")
        }
    }

    return <>
        <div className="container mt-5">
        <pre>{JSON.stringify(details)}</pre>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mt-5">
                        <div className="card-header bg-primary text-white">
                            <h1>Login Details</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input type="text" name='email' className="form-control" placeholder='Email ID' onChange={inputHandler} />
                                    <p className='text-danger'>{emailErr}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" name='password' className="form-control" placeholder='Password'  onChange={inputHandler} />
                                    <p className='text-danger'>{passwordErr}</p>
                                </div>
                                <input type="submit" value="Login" className='btn btn-warning login-btn' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default LoginForm
