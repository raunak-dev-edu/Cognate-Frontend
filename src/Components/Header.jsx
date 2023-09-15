import React from 'react'

import logo from '../Images/logo.png'

import * as BsIcons from 'react-icons/bs'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <BsIcons.BsInfoSquareFill/>
    </div>
  )
}

export default Header
