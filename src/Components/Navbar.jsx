import React from 'react'

import logo from '../Images/logo.png';

import * as GrIcons from 'react-icons/gr';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <GrIcons.GrCircleInformation size={'2rem'} color='rgba(32,32,32)'/>
    </div>
  )
}

export default Navbar
