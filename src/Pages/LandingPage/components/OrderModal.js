import React from "react";
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
} from "@chakra-ui/react";
import OrderForm from "./OrderForm";

export default function OrderModal({ children, plan, type, period }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="p-10">
      <div onClick={onOpen}>{children}</div>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Now</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <>
              <OrderForm
                onClose={onClose}
                plan={plan}
                type={type}
                period={period}
              />
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
