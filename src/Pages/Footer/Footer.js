import {
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/Logo.png";
import { AiFillSkype, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import footer from "../../assets/Footer.png";
import { FaBars, FaMapMarker } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Footer({
  HeroRef,
  WhatRef,
  WhyRef,
  FeaturesRef,
  ServicesRef,
  PlanRef,
}) {
  //Hook

  //Function
  function SocialBtn({ icon, link }) {
    return (
      <IconButton
        variant={"ghost"}
        size={"lg"}
        _hover={{ backgroundColor: "#17203F" }}
        _active={{ backgroundColor: "#17203F" }}
        icon={icon}
        onClick={() => {
          window.open(link, "_blank");
        }}
      />
    );
  }

  function Col1() {
    return (
      <Stack spacing={2}>
        <Image w={"150px"} src={Logo} />
        <Text fontWeight={"light"} fontSize={14}>
          SMS Ethiopia is a licensed A2P service provider in Ethiopia. We assist
          enterprises and businesses in communicating with their customers and
          employees in an effective and professional manner by utilizing Ethio
          Telecom's newly released SMS service.
        </Text>
        <HStack>
          <SocialBtn
            icon={<AiFillLinkedin />}
            link={"https://www.linkedin.com/company/sms-ethiopia/"}
          />
          <SocialBtn
            icon={<BsInstagram />}
            link={"https://www.instagram.com/jaktechethiopia/"}
          />
          <SocialBtn
            icon={<FaFacebookF />}
            link={"https://www.facebook.com/smsethiopiacom/"}
          />
        </HStack>
      </Stack>
    );
  }

  function Col2({ data }) {
    return (
      <Stack alignItems={"flex-start"} spacing={2}>
        <Heading color={"#FAC119"} fontSize={"lg"}>
          {data?.title}
        </Heading>
        {data?.sub?.map((data, index) => {
          return (
            <Button
              fontWeight={"medium"}
              key={index}
              variant={"link"}
              color={"white"}
              onClick={() =>
                PlanRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              {data?.title}
            </Button>
          );
        })}
      </Stack>
    );
  }

  //Jsx
  return (
    <Stack
      color={"white"}
      px={8}
      pt={16}
      pb={4}
      bg={"#17203F"}
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: "center",
        width: "100%",
        minHeight: "350px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" grid grid-cols-1 md:grid-cols-4 w-full items-start">
        <div className="md:col-span-3 w-full ">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
            <Col1 />
            {Data?.map((data, index) => {
              return <Col2 data={data} key={index} />;
            })}
          </SimpleGrid>
        </div>
        <div className="flex  items-end justify-end ">
          <div className="flex flex-col items-start justify-end space-y-2">
          <h3 className="font-semibold text-[#F1C22E] text-xl">Contact Us</h3>
            <div className="flex flex-col items-start space-y-2 text-white">
              <div className="flex items-center space-x-2">
                <FaMapMarker className="text-gray-300" />
                <h3 className="font-semibold text-[#fff] text-xl">Address</h3>
              </div>
              <p className="text-sm text-gray-300">
                Meskel Flower, Jeme'a BLDG 7th floor Addis Ababa Ethiopia
              </p>
            </div>

            {/* phone */}
            <div className="flex flex-col items-start space-y-2 text-white">
              <div className="flex items-center space-x-2">
                <BsFillTelephoneFill className="text-gray-300" />
                <h3 className="font-medium">Phone</h3>
              </div>
              <div className="text-sm text-gray-300 flex items-center space-x-2">
                {/* <a href={"tel:+251 911520105"}>+251944721682</a> */}
                <a href={"tel:+251 944721682"}>0944721682</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Stack>
  );
}

const Data = [
  {
    title: "About Us",
    sub: [
      {
        title: "Home",
        click: "",
      },
      {
        title: "Why Us",
        click: "",
      },
      {
        title: "Features",
        click: "",
      },
      {
        title: "Price",
        click: "",
      },
    ],
  },
  {
    title: "Features",
    sub: [
      {
        title: "Broadcasting Bulk Message",
        click: "",
      },
      {
        title: "Contact Management",
        click: "",
      },
      {
        title: "Package Plan Statistics",
        click: "",
      },
      {
        title: "Delivery and Status Report",
        click: "",
      },
      {
        title: "Customized Messaging",
        click: "",
      },
      {
        title: "Account Management",
        click: "",
      },
    ],
  },
  {
    title: "A2P Services",
    sub: [
      {
        title: "Dashboard",
        click: "",
      },
      {
        title: "Endpoint API",
        click: "",
      },
      {
        title: "Platform",
        click: "",
      },
    ],
  },
];
