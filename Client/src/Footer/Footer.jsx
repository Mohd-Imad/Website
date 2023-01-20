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
          Welcome to MI Mart! Our mission is to provide our customers with the freshest and highest quality products at affordable prices. 
          Our team is dedicated to providing excellent customer service and we take pride in our friendly and knowledgeable staff. We are committed to supporting our local farmers and suppliers and strive to carry products from the best local and regional producers.
          </div>
        </div>
        <div className="col-two">
          <div className="footerHeader">MENUS</div>
          <div className="footerBody">
            <Link to='/' className='footerLink'>Home</Link>
            {/* <Link to='#' className='footerLink'>Services</Link> */}
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
            <p>Novel Tech Park, Hosur Rd, 1st Main, 
              Kudlu gate, Bengaluru, Karnataka
              560068 <br />
              Phone: 0804-717-5555<br/>
              Email: hi@mimart.com
            </p>
            <div>
              <p>SOCIAL MEDIA</p>
              <div className="icons">
              <Link to='#'><FontAwesomeIcon icon={faFacebookF} className='fb-icon' /></Link>
              <Link to='#'><FontAwesomeIcon icon={faLinkedinIn} className='li-icon' /></Link>
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