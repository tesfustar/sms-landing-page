import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Register from "./Register";
import Login from "./Login";
const RegisterModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogIn, setIsLogIn] = useState(true);
  return (
    <>
      <div onClick={onOpen}>{children}</div>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>{isLogIn ?  'Login' :'Register'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <>
              {isLogIn ? <Login onClose={onClose}/> : <Register onClose={onClose} />}

              {isLogIn ? <h3 className="p-2 text-center font-medium" onClick={()=>setIsLogIn(false)}>
                Don't have account ?
                <span className="font-bold hover:underline text-[#F1C22E] cursor-pointer">
                  Sign Up
                </span>
              </h3> : <h3 className="p-2 text-center font-medium" onClick={()=>setIsLogIn(true)}>
                Allready have account ?
                <span className="font-bold hover:underline text-[#F1C22E] cursor-pointer">
                  Sign In
                </span>
              </h3>}
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
