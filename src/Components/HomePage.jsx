import React from 'react'

import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import NavPage from '../Components/NavPage';
import { Box, Container } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box 
      className='homepage' 
      size={'xl'} 
      overflowX={'hidden'}
    >
        <Header/>
        <Box className="screen-content">
            <Box 
              className="sidebarBox" 
              p={'0'}
            >
                <Sidebar/>
            </Box>
            <Box className="content">
                <NavPage/>
            </Box>
        </Box>
    </Box>
  )
}

export default HomePage
