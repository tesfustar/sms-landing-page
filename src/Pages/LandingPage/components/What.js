import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import what from "../../../assets/Group4.png";

export default function What() {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={16}
      py={8}
      px={{ base: 6, md: 24 }}
    >
      <Image boxSize={"50%"} src={what} />
      <Stack spacing={4}>
        <Heading>What's A2P Service?</Heading>
        <Text>
          A2P Stands for Application-to-Person Messaging where SMS messages
          originate from Applications or Web Platforms to be delivered to
          multiple Personal Mobiles as an SMS. A2P or commonly known as
          Enterprise/ Professional Messaging is a handy tool for any company
          that wants to reach their clients. By designing automated text
          templates for various use cases, enterprises can use A2P to
          communicate effectively with their end users.
        </Text>
      </Stack>
    </Stack>
  );
}
