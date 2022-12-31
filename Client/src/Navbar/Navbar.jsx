import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return <>
    <nav className="navbar">
        <Link className="navbar-brand">React Form Validations</Link>
        <ul className="navbar-ul">
            <li className="nav-list"><Link to='/registration' className="nav-link">Registration Form</Link></li>
            <li className="nav-list"><Link to='/login' className="nav-link">Login Form</Link></li>
        </ul>
    </nav>
  </>
}

export default Navbar
