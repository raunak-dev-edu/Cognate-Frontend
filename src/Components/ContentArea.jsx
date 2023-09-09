import { Box } from '@chakra-ui/react'
import React from 'react'

import * as BsIcons from 'react-icons/bs';
import * as RxIcons from 'react-icons/rx'

import livecam from '../Images/livecam.png';
const ContentArea = () => {
  return (
    <div className='contentarea'>
      <Box 
        className="rtsp"
        height={'34rem'}
        w='62rem'
        borderWidth='1px'
        textAlign='center'
      >
      <div className="livecam">
        <div className="status">
          <BsIcons.BsFillCircleFill color='green'/>
          <h2>Live Camera</h2>
        </div>
        <div className="rotatelive">
          <RxIcons.RxRotateCounterClockwise/>
        </div>
      </div>
      <img src={livecam} alt="" />
      </Box>

      <Box
        display='flex'
        gap={'2rem'}
        flexDirection={'column'}
      >
        <Box
          height={'10rem'}
          // bg={'red'}
          w='13rem'
          borderRadius='lg'
          borderWidth='1px'
          textAlign='center'
          className='stat'
        >
        </Box>
        <Box
          height={'10rem'}
          // bg={'red'}
          w='13rem'
          borderRadius='lg'
          borderWidth='1px'
          textAlign='center'
          className='stat'
        >

        </Box>
        <Box
          height={'10rem'}
          w='13rem'
          borderRadius='lg'
          borderWidth='1px'
          textAlign='center'
          className='stat'
        >

        </Box>
      </Box>
    </div>
  )
}

export default ContentArea
