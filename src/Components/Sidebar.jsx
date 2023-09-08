import React from 'react'

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import * as Io5Icons from 'react-icons/io5';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import { Link } from 'react-router-dom';


const sideContent = [
    {
        id: 1,
        path: '/',
        icons: <MdIcons.MdDashboardCustomize color='red'/>,
        name: 'Dashboard',
    },
    {
        id: 2,
        path: '/patients',
        icons: <Fa6Icons.FaHospitalUser color='red'/>,
        name: 'Patients',
    },
    {
        id: 3,
        path: '/doctors',
        icons: <Fa6Icons.FaUserDoctor color='red'/>,
        name: 'Doctors',
    },
    {
        id: 4,
        path: '/profile',
        icons: <FaIcons.FaUserAlt color='red'/>,
        name: 'Profile',
    },
    {
        id: 5,
        path: '/logout',
        icons: <RiIcons.RiLogoutBoxRFill color='red'/>,
        name: 'Logout',
    },
]

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {sideContent.map((item) => {
        return(
            <div className="sidebar-link" key={item.id}>
                {item.icons}
                <Link className="sidebar-link-name" to={item.path}>
                  {item.name}
                </Link>
            </div>
        )
      })}
    </div>
  )
}

export default Sidebar
