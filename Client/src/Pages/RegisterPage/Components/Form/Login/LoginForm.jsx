import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './LoginForm.css'
import Axios from 'axios'
import { Navigate, Link } from 'react-router-dom'

const LoginForm = () => {

  const [details, setDetails] = useState({
    email: "",
    password: ""
  })
  const [emailErr, setEmailErr] = useState(null)
  const [passwordErr, setPasswordErr] = useState(null)
  const [valid, setValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (valid === true) {
      validateLoginForm()
    }
  }, [details])

  const inputHandler = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  const validateLoginForm = () => {
    let email = details.email
    let password = details.password

    //Email Validation
    if (email === "") {
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

    if (emailErr === "" && passwordErr === "") {
      return true
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setValid(true)
    let login = validateLoginForm()
    if (login === true) {
      alert("Login Successful...!")
      let url = `https://filthy-ox-girdle.cyclic.app/users/login`
      Axios.post(url, details).then((resp) => { }).catch((err) => { })
      setSubmitted(true)
    }
  }

  return (
    <>
      <div className="login-container">
        {
          submitted ? <><Navigate to='/listproduct' /></> : <>
            <div className="login-card">
              <div className="login-header">
                <h1 className="login-heading">Login Details</h1>
              </div>
              <div className="login-body">
                <form onSubmit={submitHandler}>
                  <input type="text" name='email' className='login-input' placeholder='Email ID' onChange={inputHandler} />
                  <p className='err-msg'>{emailErr}</p>
                  <input type="password" name='password' className='login-input' placeholder='Password' onChange={inputHandler} />
                  <p className='err-msg'>{passwordErr}</p>
                  <input type="submit" className="login-btn" value='Login' />
                  <p className="account-msg">Don't have an account? <Link to='/register'>Register</Link></p>
                </form>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default LoginForm