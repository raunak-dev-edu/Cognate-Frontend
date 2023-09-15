import React from 'react'

import Dashboard from '../Pages/Dashboard';
import Patients from '../Pages/Patients';
import Profile from '../Pages/Profile';
import Doctor from '../Pages/Doctor'
import { Route, Routes } from 'react-router-dom';

const NavPage = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='patients' element={<Patients/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='doctor' element={<Doctor/>}/>
      </Routes>
    </div>
  )
}

export default NavPage
