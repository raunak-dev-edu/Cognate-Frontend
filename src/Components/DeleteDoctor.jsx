import { DeleteIcon } from '@chakra-ui/icons'
import { Button,
     Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const DeleteDoctor = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Button
            onClick={onOpen}
            borderRadius={'1rem 0rem 0rem 0rem'}
            background={'red'}
            _hover={{background: '#cd0303'}}
            color={'white'}
            size={'md'}
        >
            <DeleteIcon/>
        </Button>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Remove this Doctor</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                You are going to remove this doctor from the records, This will make all his past treatments unavailable.
                Do you want to continue?
            </ModalBody>
            <ModalFooter>
                <Button 
                    onClick={onClose}
                    background={'red'}
                    _hover={{background: '#cd0303'}}
                    color={'white'}
                >
                    Yes, Remove
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}

export default DeleteDoctor
