import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='nav-logo' src={navlogo} alt="" />
        <img src={navProfile}className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar