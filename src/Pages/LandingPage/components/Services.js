import {
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

export default function Services() {
  //Hook

  //Function
  function GridItems({ icon, title, body }) {
    return (
      <Stack w={"100%"} alignItems={"center"}>
        <Image
          boxSize="150px"
          objectFit="cover"
          src={require(`../../../assets/service/${icon}`)}
        />
        <Heading fontSize={"lg"} fontWeight={"bold"}>
          {title}
        </Heading>
        <Text fontSize={"sm"}>{body}</Text>
      </Stack>
    );
  }

  function GridSection() {
    return (
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {Data?.map((data, index) => (
          <HStack spacing={6} key={index}>
            <GridItems
              key={index}
              icon={data?.icon}
              title={data?.title}
              body={data?.body}
            />
            <Dividers isVis={data?.isDiv} />
          </HStack>
        ))}
      </SimpleGrid>
    );
  }

  //Jsx
  return (
    <Stack
      spacing={12}
      bg={"#F6F6F6"}
      alignItems={"center"}
      py={16}
      px={{ base: 6, md: 24 }}
    >
      <Heading>Services</Heading>
      <GridSection />
    </Stack>
  );
}

const Dividers = styled.div`
  visibility: ${(props) => (props.isVis ? "visible" : "hidden")};
  width: 1.5px;
  height: 75%;
  background-color: black;
  @media (max-width: 992px) {
    visibility: hidden;
  }
`;

const Data = [
  {
    icon: "Dashboard.png",
    title: "Dashboard",
    body: `The buyer will use the dashboard of jaktech via a web interface by obtaining username and password.`,
    isDiv: true,
  },
  {
    icon: "api.png",
    title: "Endpoint API",
    body: `Jaktech will deliver the API endpoint with detailed documentation. The integration and operation of the API to their existing system will be done by the customers' professionals.`,
    isDiv: true,
  },
  {
    icon: "platform.png",
    title: "Platform",
    body: `Jaktech will deliver the platform and the API to the buyer and integrate it to the existing systems of the customer.`,
    isDiv: false,
  },
];
