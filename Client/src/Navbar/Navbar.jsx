import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return <>
    <nav className="navBar">
      <Link to='/' className='brand'>MI Mart</Link>
        <ul className="navbar-ul">
          <li className="navList"><Link to='/' className="navLink">Home</Link></li>
          <li className="navList"><Link to='/about' className="navLink">About Us</Link></li>
          <li className="navList"><Link to='/products' className="navLink">Products</Link></li>
          <li className="navList"><Link to='/register' className="navLink">Register/Login</Link></li>
        </ul>
    </nav>
  </>
}

export default Navbar
