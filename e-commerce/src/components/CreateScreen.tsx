import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,FormControl,FormLabel,Input, Flex
  } from '@chakra-ui/react'
import {CreateButton} from '../styledComponents/navbar.styled';
import {useAppDispatch} from '../State/hooks';
import { addProduct } from '../Redux/actions';

export function CreateScreen() {
    const [payload,setPayload]=React.useState({});
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const dispatch=useAppDispatch();
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbWFyeWFzaDE1QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS95YXNodG9tYXIxNSIsImlhdCI6MTY2NDAxOTg4OCwiZXhwIjoxNjY0NDUxODg4fQ.g6u5LezG7jl2beyTDoVRf5Yk1sZIcU7ZiouOTMfqRXY';

    const handleChange=(e:any)=>{
      setPayload({...payload,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e:any)=>{
        if(payload){
            dispatch(addProduct(token,payload));
        }
        // console.log(payload);
    }
    return (
      <>
        <CreateButton onClick={onOpen}>CREATE A PRODUCT</CreateButton>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Flex>
                <FormControl>
                <FormLabel>Product name</FormLabel>
                <Input onChange={handleChange} type={'text'} ref={initialRef} required placeholder='Enter name' name="name"/>
              </FormControl>
  
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input onChange={handleChange} type={'text'} required placeholder='Enter price' name="price"/>
              </FormControl>
                </Flex>
                
                <Flex mt={4}>
                <FormControl>
                <FormLabel>Category</FormLabel>
                <Input onChange={handleChange} type={'text'} ref={initialRef} required placeholder='Enter category' name="category"/>
              </FormControl>
  
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input onChange={handleChange} type={'text'} required placeholder='Enter Description' name="description" />
              </FormControl>
                </Flex>

                <Flex mt={4}>
                <FormControl>
                <FormLabel>Image url</FormLabel>
                <Input onChange={handleChange} type={'text'} ref={initialRef} required placeholder='Enter url' name="avatar"/>
              </FormControl>
  
              <FormControl>
                <FormLabel>Devoloper Email</FormLabel>
                <Input onChange={handleChange} type={'eamil'} required placeholder='Enter Email' name="developerEmail" />
              </FormControl>
                </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit}> 
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }