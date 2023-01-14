import React, { useState } from "react";
import './Dropdown.css'
import { Link } from 'react-router-dom'


let Dropdown = (props) => {
  let dropdown = props.dropdown
  // console.log(dropdown)
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return <>
    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>

      {dropdown.map((item, index) => {
        return <li key={index}>
          <Link className={item.cName} to={item.path} > {item.title}
          </Link>
        </li>
      })}
    </ul>

  </>
}

export default Dropdown
