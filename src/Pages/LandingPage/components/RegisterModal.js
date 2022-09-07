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
import ForgotPassword from "./ForgotPassword";

const RegisterModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogIn, setIsLogIn] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const handleClose=()=>{
    onClose();
    setIsLogIn(true);
    setForgotPassword(false)
  }
  return (
    <>
      <div onClick={onOpen}>{children}</div>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {isLogIn ? "Login" : "Register"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <>
              {isLogIn ? (
                !forgotPassword ? (
                  <Login
                    onClose={onClose}
                    forgotPassword={forgotPassword}
                    setForgotPassword={setForgotPassword}
                  />
                ) : (
                  <ForgotPassword
                    forgotPassword={forgotPassword}
                    setForgotPassword={setForgotPassword}
                  />
                )
              ) : (
                <Register onClose={onClose} />
              )}

              {isLogIn ? (
                forgotPassword ? (
                  <h3
                    className="font-bold pt-2 hover:underline text-[#F1C22E] cursor-pointer text-center"
                    onClick={() => setForgotPassword(!forgotPassword)}
                  >
                    Back to Login
                  </h3>
                ) : (
                  <h3
                    className="p-2 text-center font-medium"
                    onClick={() => setIsLogIn(false)}
                  >
                    Don't have account ?
                    <span className="font-bold hover:underline text-[#F1C22E] cursor-pointer">
                      Sign Up
                    </span>
                  </h3>
                )
              ) : (
                <h3
                  className="p-2 text-center font-medium"
                  onClick={() => setIsLogIn(true)}
                >
                  Allready have account ?
                  <span className="font-bold hover:underline text-[#F1C22E] cursor-pointer">
                    Sign In
                  </span>
                </h3>
              )}
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
