import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return <>
    <nav className="navbar1">
      <Link to='/' className='brand'>logo</Link>
      <ul className="navbar-ul">
        <li className="navList"><Link to='/' className="navLink">Home</Link></li>
        <li className="navList"><Link to='/product' className="navLink">Products</Link></li>
        <li className="navList"><Link to='/register' className="navLink">Register/Login</Link></li>
      </ul>
    </nav>
  </>
}

export default Navbar
