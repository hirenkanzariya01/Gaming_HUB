import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="mainNavbar">
        <div className="logo">
          <img src={logo} alt="Logo image" />
        </div>
        <div className="navigationLink">
          <nav>
            <ul className='NavList'>
              <li> <Link to='/' className='link'> Home</Link></li>
              <li><Link to='/Shop' className='link'>Our Shop</Link></li>
              <li><Link to='/Product' className='link'>Product Details</Link></li>
              <li><Link to='/Contact' className='link'>Contact Us</Link></li>
              <li><Link  className='link'>SIGN IN</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar