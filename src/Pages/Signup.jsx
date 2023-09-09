import React, { useState } from 'react'

import { 
  Container,
  Box,
  Button,
  FormControl,
  FormLabel, 
  Input, 
  InputGroup, 
  InputRightElement, 
  VStack,
  Heading,
  Text,
  Checkbox
} from '@chakra-ui/react';


import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';


const Signup = () => {
  const [show,setShow] = useState(false);
  const [check,setCheck] = useState(false);

  const handleClick = () => setShow(!show);
  const handleCheck = () => setCheck(!check);

  return (
<div className='login'>
        <Container maxW='xl' centerContent>
            <Box
                d='flex'
                justifyContent='center'
                p={9}
                height={'42rem'}
                bg={'white'}
                w='100%'
                m="40px 0 15px 0"
                borderRadius='lg'
                borderWidth='1px'
                textAlign='center'
            >
                <img src={logo} alt="Logo" className='logo' />
                <Heading className='heading'>SignUp</Heading>
                <VStack spacing='1rem' color='black'>

                    <FormControl id='login-email' isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                        placeholder='Enter Your Name'
                        />
                    </FormControl>

                    <FormControl id='login-email' isRequired>
                        <FormLabel>UserId</FormLabel>
                        <Input
                        placeholder='Enter Your UserId'
                        />
                    </FormControl>

                    <FormControl id='login-email' isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                        placeholder='Enter Your Number'
                        />
                    </FormControl>

                    <FormControl id='login-password' isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                        <Input
                            type={show ? 'text' : 'password'}
                            placeholder='Enter Your Password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                        <Text fontSize='0.9rem' textAlign={'left'}>Use 8 or more characters with a mix of letters, numbers & symbols</Text>
                        <Checkbox paddingTop={'1rem'}>Agree to our Terms of use and Privacy Policy</Checkbox>
                    </FormControl>

                    <Button
                        colorScheme='rgba(0, 57, 117, 1);                        '
                        width='100%'
                        style={{marginTop: 15}}
                    >
                        SignUp
                    </Button>
                    <Text>Already have an account? <Link to='/' style={{color:'rgba(0, 57, 117, 1)'}}>Login Here</Link></Text>
                </VStack>
            </Box>
        </Container>
    </div>
  )
}

export default Signup
