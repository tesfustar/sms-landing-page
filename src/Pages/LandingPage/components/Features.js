import {
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import "./style.css";
import React from "react";
import one from "../../../assets/features/one.svg";
import two from "../../../assets/features/two.svg";
import three from "../../../assets/features/three.svg";
import four from "../../../assets/features/four.svg";
import five from "../../../assets/features/five.svg";
import six from "../../../assets/features/six.svg";
import mockup from "../../../assets/features/mockup.png";
import account from "../../../assets/features/account.svg";
import telegram from "../../../assets/features/telegram.png";
import Flower from "../../../assets/Flower.png";
import mac from "../../../assets/mac.png";
import api from "../../../assets/service/api.png";
export default function Features() {
  const featureData = [
    {
      id: 1,
      title: "Bulk SMS",
      description:
        "Jaktech brings the A2P enterprise messaging solution state of the art technology for enterprises with features that include",
      img: one,
    },
    {
      id: 2,
      title: "Smart SMS",
      description:
        "Jaktech brings the A2P enterprise messaging solution state of the art technology for enterprises with features that include",
      img: two,
    },
    {
      id: 3,
      title: "SMS Draft",
      description:
        "Jaktech brings the A2P enterprise messaging solution state of the art technology for enterprises with features that include",
      img: three,
    },
    {
      id: 4,
      title: "Contacts",
      description:
        "Jaktech brings the A2P enterprise messaging solution state of the art technology for enterprises with features that include",
      img: four,
    },
    {
      id: 5,
      title: "Account Management",
      description:
        "Jaktech brings the A2P enterprise messaging solution state of the art technology for enterprises with features that include",
      img: account,
    },
    {
      id: 6,
      title: "SMS History",
      description:
        "Jaktech brings the A2P enterprise messaging solution state of the art technology for enterprises with features that include",
      img: six,
    },
    {
      id: 7,
      title: "SMS Scheduling",
      description:
        "Jaktech brings the A2P enterprise messaging solution state of the art technology for enterprises with features that include",
      img: telegram,
    },
  ];
  return (
    <>
      <div className="bg-[#17203F] p-3 md:p-5 py-10">
        <div className="flex flex-col items-center justify-start w-full p-3  relative">
          <img src={Flower} alt="" width={25} className="absolute" />
          <h1 className="text-[#FAC119] font-bold text-2xl md:text-3xl">
            Features
          </h1>
        </div>
        <div className="max-w-6xl mx-auto p-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          {featureData.slice(0, 3).map((item) => (
            <div className="flex items-start space-x-4" key={item.id}>
              <img src={item.img} alt="" className="h-8" />
              <div className="text-white">
                <h1 className="font-bold text-xl">{item.title}</h1>
                <p className="text-[13px] font-light ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* second */}
        <div className="max-w-6xl mx-auto p-3 grid grid-cols-1 md:grid-cols-3 gap-3 py-4">
          <div className="flex flex-col items-start space-y-10">
            {featureData.slice(3, 5).map((item) => (
              <div className="flex items-start space-x-4">
                <img src={item.img} alt="" className="h-8" />
                <div className="text-white">
                  <h1 className="font-bold text-2xl">{item.title}</h1>
                  <p className="text-sm font-light ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img src={mockup} alt="" className="" />
          </div>
          <div className="flex flex-col items-start space-y-10">
            {featureData.slice(3, 5).map((item) => (
              <div className="flex items-start space-x-4">
                <img src={item.img} alt="" className="h-8" />
                <div className="text-white">
                  <h1 className="font-bold text-2xl">{item.title}</h1>
                  <p className="text-sm font-light ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* end point api part */}
      <div className="">
        <div className="max-w-5xl mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-3 pt-10 w-full ">
          <div className="flex items-start space-x-2">
            <img src={api} alt="" className="h-12" />
            <div className="flex flex-col items-start space-y-2">
              <h1 className="font-bold text-2xl md:text-3xl text-[#17203F]">Endpoint API</h1>
              <p className="text-sm font-medium">
                Jaktech will deliver the API endpoint with detailed
                documentation. The integration and operation of the API to their
                existing system will be done by the customers' professionals.
              </p>
              <button className="bg-[#F1C22E] p-2  text-[#17203F] rounded-full hover:shadow-lg font-medium px-5">Read the docs {">"}</button>
            </div>
          </div>
          <div className="">
            <img src={mac} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

// <Stack
//       direction={{ base: "column", md: "row" }}
//       bg={"#17203F"}
//       color={"white"}
//       alignItems={"center"}
//       justifyContent={"space-evenly"}
//       spacing={{ base: 16, md: 40 }}
//       py={16}
//       px={{ base: 6, md: 24 }}
//       zIndex={1000}
//     >
//       <Stack
//         alignItems={{ base: "center", sm: "flex-start" }}
//         spacing={4}
//         w={{ base: "100%", md: "35%" }}
//       >
//         <div className="z-500" >
//         <img src={Flower} alt="" width={25} />
//         <Heading color={"#F1C22E"}>Features</Heading>
//         </div>
//         <Text zIndex={1000}>
//           Jaktech brings the A2P enterprise messaging solution state of the art
//           technology for enterprises with features that include
//         </Text>
//         <UnorderedList px={8} zIndex={1000}>
//           <ListItem>Broadcasting Bulk Message:</ListItem>
//           <ListItem>Contact Management</ListItem>
//           <ListItem>Package Plan Statistics</ListItem>
//           <ListItem>Delivery and Status Report</ListItem>
//           <ListItem>Customized Messaging</ListItem>
//           <ListItem>Account Management</ListItem>
//         </UnorderedList>
//       </Stack>
//       <Image w={{ base: "75%", md: "25%" }} src={Group} zIndex={1000} />
//     </Stack>
//         <h1 className= 'z-[0] absolute top-1/4 flex items-center justify-center w-full  software text-[#17203F] text-[150px] md:text-[200px] font-bold '>2015</h1>
