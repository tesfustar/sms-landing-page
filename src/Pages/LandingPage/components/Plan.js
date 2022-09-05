import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import TableSection from "./TableSection";

export default function Plan() {
  //Hook

  //Function
  function Head() {
    return (
      <Stack textAlign={"center"} alignItems={"center"} spacing={4}>
        <Heading color={"#FAC119"}>Choose a plan</Heading>
        <Text w={"75%"} color={"white"}>
          We have diverse payment options, both prepaid and postpaid, you can
          choose a package that fits your need and get started quick!
        </Text>
      </Stack>
    );
  }

  //Jsx
  return (
    <Stack bg={"#17203F"} spacing={8} py={8} px={{ base: 6, md: 24 }}>
      <Head />
      <TableSection />
    </Stack>
  );
}
