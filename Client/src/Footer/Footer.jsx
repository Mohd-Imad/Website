import React from 'react'
import { Link } from 'react-router-dom'
import Copyright from './Copyright/Copyright'
import "./Footer.css"
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return <>
    <div className='footer-bg'>
      <div className="footer">
        <div className="col-one">
          <div className="footerHeader">ABOUT US</div>
          <div className="footerBody">
            MI-Mart"•' is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (Al), Machine Learning. Robotic Process
            Automation (RPA). BlockChain and Internet of Things (IOT). MI-Mart mission
            to enable businesses to leverage the full potential of disruptive
            technologies to stay competitive in the market.
          </div>
        </div>
        <div className="col-two">
          <div className="footerHeader">MENUS</div>
          <div className="footerBody">
            <Link to='/' className='footerLink'>Home</Link>
            <Link to='#' className='footerLink'>Services</Link>
            <Link to='/products' className='footerLink'>Products</Link>
            <Link to='#' className='footerLink'>Career</Link>
          </div>
        </div>
        <div className="col-three">
          <div className="footerHeader">LEARN MORE</div>
          <div className="footerBody">
            <Link to='/about' className='footerLink'>About</Link>
            <Link to='#' className='footerLink'>Contact Us</Link>
          </div>
        </div>
        <div className="col-four">
          <div className="footerHeader">ADDRESS</div>
          <div className="footerBody">
            <p>Novel Tech Park, 1st Floor, Hosur Rd,
              Kudlu gate, Bengaluru, Karnataka
              560068
              Phone: 0804-717-8999
              Email: hi@mimart.com
            </p>
            <div>
              <p>SOCIAL MEDIA</p>
              <div className="icons">
              <Link to='/facebook'><FontAwesomeIcon icon={faFacebookF} className='fb-icon' /></Link>
              <Link to='/linkedin'><FontAwesomeIcon icon={faLinkedinIn} className='li-icon' /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  </>
}

export default Footer