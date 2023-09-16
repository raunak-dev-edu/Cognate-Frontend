import { EditIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, FocusLock, FormControl, FormLabel, IconButton, Input, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const TextInput = React.forwardRef((props, ref) => {
    return (
      <FormControl>
        <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
        <Input ref={ref} id={props.id} {...props} />
      </FormControl>
    )
})

const Form = ({ firstFieldRef, onCancel }) => {
    return (
      <Stack spacing={4}>
        <TextInput
          label='First name'
          id='first-name'
          ref={firstFieldRef}
          defaultValue='Munna'
        />
        <TextInput label='Last name' id='last-name' defaultValue='Bhai' />
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button 
            variant='outline'
            onClick={onCancel}
            border={'1px solid red'}
            background={'red'}
            _hover={{background: '#cd0303'}}
            color={'white'}
          >
            Cancel
          </Button>
          <Button
            background={'rgba(0, 57, 117, 1)'}
            _hover={{background: '#0350a4'}}
            color={'white'}
           >
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    )
}

const EditDoctor = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = React.useRef(null)
  
    return (
      <>
        <Popover
          isOpen={isOpen}
          initialFocusRef={firstFieldRef}
          onOpen={onOpen}
          onClose={onClose}
          placement='right'
          closeOnBlur={false}
        >
          <PopoverTrigger>
          <Button 
              borderRadius={'0rem 1rem 0rem 0rem'}
              background={'rgba(0, 57, 117, 1)'}
              _hover={{background: '#0350a4'}}
              color={'white'}
            >
              <EditIcon/>
            </Button>
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverCloseButton />
              <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </>
    )
}

export default EditDoctor
