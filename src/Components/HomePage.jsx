import React from 'react'

import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import NavPage from '../Components/NavPage';
import { Box } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <div className='homepage'>
        <Header/>
        <Box className="screen-content">
            <Box className="sidebarBox" p={'0'}>
                <Sidebar/>
            </Box>
            <Box className="content">
                <NavPage/>
            </Box>
        </Box>
    </div>
  )
}

export default HomePage
