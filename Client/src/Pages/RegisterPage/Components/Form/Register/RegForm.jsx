import React from 'react'
import { useState, useEffect } from 'react'
import './RegForm.css'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'

const RegForm = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        re_password: ""
    })
    const [nameErr, setNameErr] = useState(null)
    const [mobileErr, setMobileErr] = useState(null)
    const [emailErr, setEmailErr] = useState(null)
    const [passwordErr, setPasswordErr] = useState(null)
    const [rePasswordErr, setRePasswordErr] = useState(null)
    const [valid, setValid] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const changeInputHandler = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if (valid === true) {
            validateForm()
        }
    }, [formValues])

    const validateForm = () => {
        let name = formValues.name
        let mobile = formValues.mobile
        let email = formValues.email
        let password = formValues.password
        let re_password = formValues.re_password

        //Name validation
        if (name === "") {
            setNameErr("Please enter Name")
        }
        else if (name.length < 4 || name.length > 15) {
            setNameErr("Name must be of min 4 and max 10 characters")
        }
        else {
            setNameErr("")
        }

        //Mobile validation
        if (mobile === "") {
            setMobileErr("Please enter Mobile number")
        }
        else if (mobile.length < 10 || mobile.length > 10) {
            setMobileErr("Enter valid Mobile number")
        }
        else {
            setMobileErr("")
        }

        //Email validtion
        /*      const isEmailValid = (email) => {
                 const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 return pattern.test(email);
             }; */

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

        //Re-Password validation
        if (re_password === "") {
            setRePasswordErr("Please re-enter your Password")
        }
        else if (re_password !== password) {
            setRePasswordErr("Password does not match")
        }
        else if (re_password === password) {
            setRePasswordErr("")
        }

        //for submitting purpose when every fields are true
        if (nameErr === "" && mobileErr === "" && emailErr === "" && passwordErr === "" && rePasswordErr === "") {
            return true
        }
    }

    const submitFormHandler = (event) => {
        event.preventDefault()
        setValid(true)
        let submit = validateForm()
        // console.log(submit)
        if (submit === true) {
            alert("Form submitted successfully")
            let url = 'https://filthy-ox-girdle.cyclic.app/users/create'
            Axios.post(url,formValues).then((resp)=>{
                setSubmitted(true)
            }).catch((err)=>{console.log(err)})
            // console.log(formValues)
        }
    }

    return (
        <>
            <div className="container">
                {/* <pre>{JSON.stringify(su)}</pre> */}
                <div className="row">
                    <div className="col-md-5">
                        {
                            submitted ? <><Navigate to='/login' /></> :
                                <>
                                    <div className="card">
                                        <div className="card-header">
                                            <h1>Registration Details</h1>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={submitFormHandler}>
                                                <div className="form-group">
                                                    <input type="text" name='name' placeholder="Name" className='form-control' onChange={changeInputHandler} />
                                                    <p className='text-danger'>{nameErr}</p>
                                                </div>
                                                <div className="form-group">
                                                    <input type="number" name='mobile' placeholder="Mobile" className='form-control' onChange={changeInputHandler} />
                                                    <p className='text-danger'>{mobileErr}</p>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name='email' placeholder="Email" className='form-control' onChange={changeInputHandler} />
                                                    <p className='text-danger'>{emailErr}</p>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name='password' placeholder="Password" className='form-control' onChange={changeInputHandler} />
                                                    <p className='text-danger'>{passwordErr}</p>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name='re_password' placeholder="Confirm Password" className='form-control' onChange={changeInputHandler} />
                                                    <p className='text-danger'>{rePasswordErr}</p>
                                                </div>
                                                {
                                                    (nameErr || mobileErr || emailErr || passwordErr || rePasswordErr) ? <>
                                                        <input type="submit" value="Register" className='btn btn-warning reg-btn' disabled />
                                                    </> : <>
                                                        <input type="submit" value="Register" className='btn btn-warning reg-btn' />
                                                    </>
                                                }
                                            </form>
                                        </div>
                                    </div>
                                </>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default RegForm
