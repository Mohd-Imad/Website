import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown/Dropdown'
import {DropdownItems} from './Dropdown/DropdownItems'


const Navbar = () => {

  const [scrolled, setScrolled] = useState(false)
  const [productDropdown, setProductDropdown] = useState(false)
  const [userDropdown, setUserDropdown] = useState(false)


  const scrollToActivate = () => {
    if (window.scrollY >= 90) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', scrollToActivate)
  

  const displayDropdown = (listName) => {
    if (listName === "product" && window.innerWidth > 960) {
      setProductDropdown(true)
      setUserDropdown(false)
    }
    else if (listName === "user" && window.innerWidth > 960) {
      setUserDropdown(true)
      setProductDropdown(false)
    }
  }
  const hideDropdown = () => {
    setProductDropdown(false)
    setUserDropdown(false)
  }

  return <>
    <nav className={scrolled ? "navBar scrolled" : "navBar"}>
  
      <Link to='/' className='brand'>MI Mart</Link>
      <ul className="navbar-ul">
        <li className="navList"><Link to='/' className="navLink">Home</Link></li>
        <li className="navList"><Link to='/about' className="navLink">About Us</Link></li>
        <li className="navList" onMouseOver={displayDropdown.bind(this,'product')} onMouseLeave={hideDropdown}>
          <Link to='/products' className="navLink">Products</Link>
          {productDropdown ? <Dropdown dropdown={DropdownItems.product} /> : null}
        </li>
        <li className="navList" onMouseOver={displayDropdown.bind(this,'user')} onMouseLeave={hideDropdown}>
          <Link to='/register' className="navLink">Register/Login</Link>
          {userDropdown ? <Dropdown dropdown={DropdownItems.user} /> : null}
        </li>
      </ul>
    </nav>
  </>
}

export default Navbar
