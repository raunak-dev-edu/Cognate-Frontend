import React, { useState } from 'react'

import doctor from '../Images/doctor.png'

import {
    Box,
    Button,
    ButtonGroup,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
    Text,
    useDisclosure
  } from "@chakra-ui/react";

import { 
  Search2Icon,
  DeleteIcon,
  EditIcon
} from "@chakra-ui/icons";
import AddDoctor from '../Components/AddDoctor';
import DeleteDoctor from '../Components/DeleteDoctor';
import EditDoctor from '../Components/EditDoctor';

const boxStyle = {
  padding : '1rem',
  borderRadius : '1rem',
  width : '15rem',
  height : 'auto',
  display : 'flex',
  alignItems : 'center',
  flexDirection : 'column',
  justifyContent : 'center',
  gap : '0.5rem',
  position : 'relative',
}

const doctorList = [
  {
    key: '01',
    img: doctor,
    name: 'Dr. Munna Bhai',
    id: 'S011',
    post : 'Surgeon, Cardiologist',
    degree: 'MBBS , MS Gen  Surgery'
  },
  {
    key: '02',
    img: doctor,
    name: 'Dr. Munna Bhai',
    id: 'S011',
    post : 'Surgeon, Cardiologist',
    degree: 'MBBS , MS Gen  Surgery'
  },
  {
    key: '03',
    img: doctor,
    name: 'Dr. Munna Bhai',
    id: 'S011',
    post : 'Surgeon, Cardiologist',
    degree: 'MBBS , MS Gen  Surgery'
  },
  {
    key: '04',
    img: doctor,
    name: 'Dr. Munna Bhai',
    id: 'S011',
    post : 'Surgeon, Cardiologist',
    degree: 'MBBS , MS Gen  Surgery'
  },
  {
    key: '05',
    img: doctor,
    name: 'Dr. Munna Bhai',
    id: 'S011',
    post : 'Surgeon, Cardiologist',
    degree: 'MBBS , MS Gen  Surgery'
  },
  {
    key: '06',
    img: doctor,
    name: 'Dr. Munna Bhai',
    id: 'S011',
    post : 'Surgeon, Cardiologist',
    degree: 'MBBS , MS Gen  Surgery'
  },
  {
    key: '07',
    img: doctor,
    name: 'Dr. Munna Bhai',
    id: 'S011',
    post : 'Surgeon, Cardiologist',
    degree: 'MBBS , MS Gen  Surgery'
  },
  {
    key: '08',
    img: doctor,
    name: 'Dr. Munna Bhai',
    id: 'S011',
    post : 'Surgeon, Cardiologist',
    degree: 'MBBS , MS Gen  Surgery'
  },
]


const Doctor = () => {
  return (
    <div className='doctor'>
      <Box className="header-btns">
        <InputGroup
          size="md"
          >
          <Input
            borderLeftRadius={'3rem'}
            type="text" 
            placeholder="Search doctor by doctor’s name, ID" 
            border="1px solid #949494"  
            width={'70%'}
          />
          <InputRightAddon
            p={0}
            border="none"
            overflow={'hidden'}
            background={'transparent'}
          >
            <Button 
              borderRightRadius={'3rem'} 
              border="1px solid #949494"
              background={'rgba(0, 57, 117, 1)'}
              _hover={{background: '#0350a4'}}
              color={'white'}
            >
              <Search2Icon/>
            </Button>
          </InputRightAddon>

        </InputGroup>
        <AddDoctor/>
      </Box>   

      <SimpleGrid templateColumns='repeat(4, 1fr)' padding={'2rem'} gap={6}>
        <Box sx={boxStyle} boxShadow={'0px 1px 4px 0px rgba(0, 0, 0, 0.25)'}>
          <ButtonGroup
            display={'flex'}
            justifyContent={'space-between'}
            position={'absolute'}
            width={'100%'}
            top={0}
            left={0}
          >
            <DeleteDoctor/>
            <EditDoctor/>
          </ButtonGroup>

          <img src={doctor} alt="" />
          <Heading  size={'md'}>Dr.John White </Heading>
          <Heading  size={'sm'}>ID - D001</Heading>
          <Text  size={'md'}>Surgeon, Cardiologist</Text>
          <Text  size={'md'}>MBBS , MS Gen  Surgery</Text>
        </Box>

        {
          doctorList.map((doctor) => {
            return(
              <Box sx={boxStyle} boxShadow={'0px 1px 4px 0px rgba(0, 0, 0, 0.25)'} key={doctor.key}>
                <ButtonGroup
                  display={'flex'}
                  justifyContent={'space-between'}
                  position={'absolute'}
                  width={'100%'}
                  top={0}
                  left={0}
                >
                  <DeleteDoctor/>
                  <EditDoctor/>
                </ButtonGroup>

                <img src={doctor.img} alt="" />
                <Heading  size={'md'}>{doctor.name}</Heading>
                <Heading size={'sm'}>{doctor.id}</Heading>
                <Text size={'md'}>{doctor.post}</Text>
                <Text size={'md'}>{doctor.degree}</Text>
              </Box>
            )
          })
        }
      </SimpleGrid>

    </div>
  )
}

export default Doctor
