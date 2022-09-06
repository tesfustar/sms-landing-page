import {
  Button,
  HStack,
  Image,
  Stack,
  useDisclosure,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Logo from "../../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import OrderModal from "../LandingPage/components/OrderModal";
import { useAuth } from "../../context/auth";
import RegisterModal from "../LandingPage/components/RegisterModal";
export default function NavBar({
  HeroRef,
  WhatRef,
  WhyRef,
  FeaturesRef,
  ServicesRef,
  PlanRef,
}) {
  //Hook
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { user, token, logout } = useAuth();
  //Function
  function FullNav() {
    return (
      <HStack spacing={12}>
        <Button
          size={"sm"}
          color={"white"}
          fontSize={"sm"}
          variant={"link"}
          onClick={() =>
            HeroRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          HOME
        </Button>
        <Button
          size={"sm"}
          color={"white"}
          fontSize={"sm"}
          variant={"link"}
          onClick={() =>
            WhyRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          WHY US
        </Button>
        <Button
          size={"sm"}
          color={"white"}
          fontSize={"sm"}
          variant={"link"}
          onClick={() =>
            FeaturesRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          FEATURES
        </Button>
        <Button
          size={"sm"}
          color={"white"}
          fontSize={"sm"}
          variant={"link"}
          onClick={() =>
            PlanRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          PACKAGE
        </Button>
        <RegisterModal>
          <Button
            size={"md"}
            color={"white"}
            fontSize={"sm"}
            bg={"#F1C22E"}
            onClick={user && token && logout}
          >
            {user && token ? "Log out" : "Sign In"}
          </Button>
        </RegisterModal>
      </HStack>
    );
  }

  function DrawerNav() {
    return (
      <>
        <IconButton
          variant={"outline"}
          colorScheme={"yellow"}
          aria-label="Search database"
          ref={btnRef}
          onClick={onOpen}
          icon={<GiHamburgerMenu />}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"#17203F"}>
            <DrawerCloseButton color={"white"} />
            <DrawerHeader>
              <Image src={Logo} w={"100px"} objectFit="cover" />
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={10} h={"100%"} py={12}>
                <Button
                  size={"md"}
                  color={"white"}
                  variant={"link"}
                  onClick={() => {
                    onClose();
                    HeroRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  HOME
                </Button>
                <Button
                  size={"md"}
                  color={"white"}
                  variant={"link"}
                  onClick={() => {
                    onClose();
                    WhyRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  WHY US
                </Button>
                <Button
                  size={"md"}
                  color={"white"}
                  variant={"link"}
                  onClick={() => {
                    onClose();
                    FeaturesRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  FEATURES
                </Button>
                <Button
                  size={"md"}
                  color={"white"}
                  variant={"link"}
                  onClick={() => {
                    onClose();
                    PlanRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  PACKAGE
                </Button>
                <Stack alignItems={"center"}>
                  <RegisterModal>
                    <Button
                      size={"md"}
                      color={"white"}
                      fontSize={"sm"}
                      bg={"#F1C22E"}
                      onClick={user && token && logout}
                    >
                      {user && token ? "Log out" : "Sign In"}
                    </Button>
                  </RegisterModal>
                </Stack>
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              {/* <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>  */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  //Jsx
  return (
    <Stack
      position={"absolute"}
      top={0}
      zIndex={2}
      w={"100%"}
      direction={"row"}
      bg={"transparent"}
      justifyContent={"space-between"}
      px={isLargerThan992 ? 16 : 5}
      py={6}
    >
      <Image src={Logo} w={"100px"} objectFit="contain" />
      {!isLargerThan992 ? <DrawerNav /> : <FullNav />}
    </Stack>
  );
}
