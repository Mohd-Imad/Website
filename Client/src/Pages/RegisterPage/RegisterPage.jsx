import React from 'react'
import './RegisterPage.css'
import RegForm from './Components/Form/Register/RegForm'

const RegisterPage = () => {
  return (
    <>
     <div className="registerpage">
      <div className="register-container">
        <RegForm />
      </div>
     </div>
    </>
  )
}

export default RegisterPage
