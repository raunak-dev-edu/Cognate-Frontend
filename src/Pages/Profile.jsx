import { Box, Button, Container, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Profile = () => {
  const navigate = useNavigate();

    const [show,setShow] = useState(false);

    const handleClick = () => setShow(!show);
  return (
    <div className='profile'>
        {/* <Container maxW='xl' centerContent> */}
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
                <Heading className='heading'>Profile Details</Heading>
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
                        onClick={() => navigate('/home')}
                    >
                        Update
                    </Button>
                    {/* <Text>Don't Have An Account? <Link to='/signup' style={{color:'rgba(0, 57, 117, 1)'}}>Create One</Link></Text> */}
                </VStack>
            </Box>
        {/* </Container> */}
    </div>
  )
}

export default Profile
