import { EditIcon } from '@chakra-ui/icons'
import { 
    Button,
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    FormControl,
    FormLabel,
    Input,
 } from '@chakra-ui/react'

import React, { useState } from 'react'

const EditDoc = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useState(null)
  const finalRef = useState(null)
  return (
    <>
     <Button
        borderRadius={'2rem'}
        background={'rgba(0, 57, 117, 1)'}
        _hover={{background: '#0350a4'}}
        color={'white'}
        onClick={onOpen}
    >
        + Add Doctor
    </Button>
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Add Doctor</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel>Doctor Name</FormLabel>
                <Input ref={initialRef} placeholder='Doctor Name' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Specialist</FormLabel>
                <Input placeholder='Specialist' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Qualification</FormLabel>
                <Input placeholder='Qualification' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Profile Photo</FormLabel>
                <Input placeholder='Profile Photo' type='file'/>
            </FormControl>
            </ModalBody>

            <ModalFooter>
            <Button 
                mr={3}
                background={'rgba(0, 57, 117, 1)'}
                color={'white'}
                _hover={{background: '#0350a4'}}
            >
                Add
            </Button>
            <Button 
                onClick={onClose}
                background={'red'}
                color={'white'}
                _hover={{background: '#cd0303'}}
            >Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal> 
    </>
  )
}

export default EditDoc
