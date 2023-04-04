import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Background from "../../../assets/BG.png";
import Heroillustration from "../../../assets/Heroillustration.png";
import OrderModal from "./OrderModal";
import newyear from "../../../assets/newyear.png";
import Flower from "../../../assets/Flower.png";
import "./style.css";
export default function HeroSection() {
  //Hook
  const [isLargerThan1280] = useMediaQuery("(max-width: 992px)");

  //Function
  function TextBox() {
    return (
      <Stack
        w={{ base: "100%", lg: "50%" }}
        zIndex={1}
        alignItems={"center"}
        px={6}
        py={40}
      >
        <Stack color={"white"} w={"100%"} spacing={6} alignItems={"flex-start"}>
          <Heading fontWeight={"semibold"} fontSize={"5xl"}>
            Send Bulk SMS In The New Year.
          </Heading>
          <Text>
            SMS is indeed the most effective way of communication with an
            average opening time of less than a minute, reading of 97% and 60%
            of memorization.
          </Text>
          <h1 className="font-bold text-4xl">shitpc</h1>
          <OrderModal plan={""} type={""} period={""}>
            <Button
              bg={"#F1C22E"}
              fontWeight={"normal"}
              color={"#17203F"}
              rounded={"2xl"}
            >
              Order Now
            </Button>
          </OrderModal>
        </Stack>
      </Stack>
    );
  }

  function FlowerImage({ width }) {
    return (
      <Image
        position={"absolute"}
        top={20}
        right={3}
        zIndex={0}
        w={width}
        objectFit="cover"
        src={Flower}
        alt="Dan Abramov"
      />
    );
  }
  //Jsx
  return (
    <Stack
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        width: "100%",
        height: "650px",
        backgroundSize: "100% 650px",
        backgroundRepeat: "no-repeat",
        top: 0,
      }}
    >
      <div className="relative  flex flex-col items-center md:justify-center h-full pt-20 md:pt-1">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center
     justify-center p-3  gap-3"
        >
          <div className="relative flex flex-col  md:hidden">
            <p className="font-bold text-md absolute top-4 text-white left-2">
              Happy New Year
            </p>
            <img src={newyear} alt="" className="" />
            <p className="stay font-bold text-lg absolute bottom-0 right-2">
              Stay With Us
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 text-white">
            <h1 className="font-bold text-3xl lg:text-4xl">
              Send your New Year wishes with a single Click!
            </h1>
            <p className="max-w-lg text-sm md:text-base">
              SMS Ethiopia wishes you a happy Ethiopian New Year! Reach out to
              your customers and wish them Happy Holidays with our Bulk
              Messaging Platform.
            </p>

            <button
              onClick={() => window.open("http://my.smsethiopia.com")}
              className="bg-[#F1C22E] p-2 px-10 rounded-sm hover:rounded-full transition ease-in-out duration-300"
            >
              Start free trial
            </button>
          </div>
          <div className="relative flex-col hidden  md:flex ">
            <p className="font-bold text-md absolute top-12 text-white left-2">
              Happy New Year
            </p>
            <img src={newyear} alt="" className="" />
            <p className="stay font-bold text-lg absolute bottom-3 right-2">
              Stay With Us
            </p>
          </div>
        </div>
        <img src={Flower} width={40} alt="" className="absolute top-14" />
        <img
          src={Flower}
          width={40}
          alt=""
          className="absolute top-14 left-2"
        />
        <img
          src={Flower}
          width={40}
          alt=""
          className="absolute top-14 right-2"
        />
        <img
          src={Flower}
          width={40}
          alt=""
          className="absolute bottom-20 right-2"
        />
        <img
          src={Flower}
          width={40}
          alt=""
          className="absolute bottom-20 left-2"
        />
        <img
          src={Flower}
          width={40}
          alt=""
          className="absolute bottom-20 left-14 md:left-32"
        />
        <img
          src={Flower}
          width={40}
          alt=""
          className="absolute top-20 left-20"
        />
      </div>
    </Stack>
  );
}

{
  /* <Stack
px={{ base: 6, md: 24 }}
direction={"row"}
w={"100vw"}
style={{
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  width: "100%",
  height: "650px",
  backgroundSize: "100% 650px",
  backgroundRepeat: "no-repeat",
}}
overflow={"hidden"}
>
<TextBox />
{!isLargerThan1280 && (
  <Image
    position={"absolute"}
    top={20}
    right={10}
    zIndex={0}
    w={"600px"}
    objectFit="cover"
    src={newyear}
    alt="Dan Abramov"
  />
)}
 <FlowerImage width={"40px"}  top={30} right={20}/>
 <FlowerImage width={"40px"}  top={"50px"} right={"40px"}/>
 <Image
    position={"absolute"}
    top={"100px"} left={10}
    zIndex={0}
    w={"40px"}
    objectFit="cover"
    src={Flower}
    alt="Dan Abramov"
  />
   <Image
    position={"absolute"}
    top={"150px"} right={20}
    zIndex={0}
    w={"50px"}
    objectFit="cover"
    src={Flower}
    alt="Dan Abramov"
  />
</Stack> */
}
