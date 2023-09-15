import { Box, Text } from '@chakra-ui/react'
import React from 'react'

import operation from '../Images/livecam.png';

import {BsCircleFill} from 'react-icons/bs';
import {IoMdRefresh} from 'react-icons/io'

const Cctv = () => {
  return (
    <Box 
        className='cctv'
    >
        <Box className="cctv-options">
            <div className="status">
                <BsCircleFill color='green'/>
                <Text>Live Camera</Text>
            </div>
            <div className="refresh">
                <IoMdRefresh/>
            </div>
        </Box>
        <Box className='rtsp'>
           <img src={operation} alt="" /> 
        </Box>
    </Box>
  )
}

export default Cctv
