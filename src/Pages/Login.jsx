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
    Text
} from '@chakra-ui/react';


import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {

    const [show,setShow] = useState(false);

    const handleClick = () => setShow(!show);

  return (
    <div className='login'>
        <Container maxW='xl' centerContent>
            <Box
                d='flex'
                justifyContent='center'
                p={10}
                height={'35rem'}
                bg={'white'}
                w='100%'
                m="40px 0 15px 0"
                borderRadius='lg'
                borderWidth='1px'
                textAlign='center'
            >
                <img src={logo} alt="Logo" className='logo' />
                <Heading className='heading'>Log In</Heading>
                <VStack spacing='2rem' color='black'>

                    <FormControl id='login-email' isRequired>
                        <FormLabel>UserId</FormLabel>
                        <Input
                        placeholder='Enter Your UserId'
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
                        <Link to='www.google.com'>Forgot Password</Link>
                    </FormControl>

                    <Button
                        colorScheme='rgba(0, 57, 117, 1);                        '
                        width='100%'
                        style={{marginTop: 15}}
                    >
                        Login
                    </Button>
                    <Text>Don't Have An Account? <Link to='/signup'>Create One</Link></Text>
                </VStack>
            </Box>
        </Container>
    </div>
  )
}

export default Login
