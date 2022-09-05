import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsGearWideConnected } from "react-icons/bs";
import { MdPaid, MdOutlineDashboard } from "react-icons/md";
import OrderModal from "./OrderModal";
import TableComponent from "./TableComponent";
import { EMP, ELP, DMP, DLP, PP } from "./TableData";

export default function TableSection() {
  //Hook
  const [Data, setData] = useState(EMP);
  const [IndexValue, setIndexValue] = useState(0);

  const [Plan, setPlan] = useState("Prepaid", "Postpaid");
  const [Type, setType] = useState("Endpoint API", "Dashboard");
  const [Period, setPeriod] = useState("1", "3");

  //Function
  function Acc1() {
    return (
      <AccordionItem>
        <h2>
          <AccordionButton
            color={IndexValue == 0 ? "#FAC119" : "white"}
            onClick={() => setIndexValue(0)}
          >
            <Box flex="1" textAlign="left">
              <HStack>
                <BsGearWideConnected />
                <Text>Endpoint API</Text>
              </HStack>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} bg={"#1C274A"}>
          <Stack>
            <Button
              color={Data == EMP ? "#FAC119" : "white"}
              onClick={() => {
                setData(EMP);
                setPlan("Prepaid");
                setType("Endpoint API");
                setPeriod("1");
              }}
              variant={"ghost"}
              _hover={{ backgroundColor: "#313D6A" }}
              _active={{ color: "#FAC119" }}
            >
              Monthly packages
            </Button>
            <Button
              color={Data == ELP ? "#FAC119" : "white"}
              onClick={() => {
                setData(ELP);
                setPlan("Prepaid");
                setType("Endpoint API");
                setPeriod("3");
              }}
              variant={"ghost"}
              _hover={{ backgroundColor: "#313D6A" }}
              _active={{ color: "#FAC119" }}
            >
              Long Term Packages
            </Button>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    );
  }

  function Acc2() {
    return (
      <AccordionItem>
        <h2>
          <AccordionButton
            color={IndexValue == 1 ? "#FAC119" : "white"}
            onClick={() => setIndexValue(1)}
          >
            <Box flex="1" textAlign="left">
              <HStack>
                <MdOutlineDashboard />
                <Text>Dashboard & Platform</Text>
              </HStack>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} bg={"#1C274A"}>
          <Stack>
            <Button
              color={Data == DMP ? "#FAC119" : "white"}
              onClick={() => {
                setData(DMP);
                setPlan("Prepaid");
                setType("Dashboard");
                setPeriod("1");
              }}
              variant={"ghost"}
              _hover={{ backgroundColor: "#313D6A" }}
              _active={{ color: "#FAC119" }}
            >
              Monthly packages
            </Button>
            <Button
              color={Data == DLP ? "#FAC119" : "white"}
              onClick={() => {
                setData(DLP);
                setPlan("Prepaid");
                setType("Dashboard");
                setPeriod("3");
              }}
              variant={"ghost"}
              _hover={{ backgroundColor: "#313D6A" }}
              _active={{ color: "#FAC119" }}
            >
              Long Term Packages
            </Button>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    );
  }

  function AccordionSection() {
    return (
      <Stack
        w={{ base: "100%", lg: "350px" }}
        rounded={"md"}
        bg={"#202B52"}
        pb={4}
        boxShadow={"dark-lg"}
      >
        <Box
          textAlign={"center"}
          py={4}
          rounded={"md"}
          boxShadow={"dark-lg"}
          w={"100%"}
          mb={3}
        >
          <Heading fontSize={"2xl"} fontWeight={"semibold"}>
            PRICING PLANS
          </Heading>
        </Box>

        <Accordion defaultIndex={IndexValue}>
          <Acc1 />
          <Acc2 />
        </Accordion>

        <Button
          onClick={() => {
            setData(PP);
            setIndexValue(2);
            setPlan("Postpaid");
            setType("");
            setPeriod("");
          }}
          variant={"ghost"}
          color={IndexValue == 2 ? "#FAC119" : "white"}
          _hover={{ backgroundColor: "#313D6A" }}
          _active={{ color: "#FAC119" }}
        >
          <HStack textAlign={"start"} w={"100%"}>
            <MdPaid />
            <Text>Postpaid Plans</Text>
          </HStack>
        </Button>
      </Stack>
    );
  }

  //Jsx
  return (
    <Stack direction={"column"}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        color={"white"}
        spacing={6}
      >
        <AccordionSection />
        <TableComponent Data={Data} />
      </Stack>
      <Stack alignSelf={"flex-end"} px={2}>
        <OrderModal plan={Plan} type={Type} period={Period}>
          <Button color={"#17203F"} bg={"#FAC119"} size={"md"}>
            ORDER NOW
          </Button>
        </OrderModal>
      </Stack>
    </Stack>
  );
}
