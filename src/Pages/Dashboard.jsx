import React from 'react'
import Cctv from '../Components/Cctv'
import { Box } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      {/* <h1>Dashboard</h1> */}
      <Cctv/>
      <Box className="data">
        <Box
          className='data-box'
          d='flex'
          justifyContent='center'
          p={10}
          height={'10rem'}
          bg={'white'}
          borderRadius='lg'
          borderWidth='1px'
          textAlign='center'
        >

        </Box>

        <Box
          className='data-box'
          d='flex'
          justifyContent='center'
          p={10}
          height={'10rem'}
          bg={'white'}
          borderRadius='lg'
          borderWidth='1px'
          textAlign='center'
        >

        </Box>

        <Box
          className='data-box'
          d='flex'
          justifyContent='center'
          p={10}
          height={'10rem'}
          bg={'white'}
          borderRadius='lg'
          borderWidth='1px'
          textAlign='center'
        >

        </Box>
      </Box>
    </div>
  )
}

export default Dashboard
